import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import TransBtn from "../components/reusable/TransBtn";
import React from "react";
import main from "../components/data/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CaseCard from "../components/reusable/CaseCard";

const allInds = main.map((study) => study.industry);
const uniqueInds = allInds.filter((v, i, a) => a.indexOf(v) === i);
const inds = ["All", ...uniqueInds];

const OurWork: NextPage = () => {
  const buttonsDiv = useRef<HTMLDivElement>(null);
  const [activeCat, setActiveCat] = useState<string>("All");
  const [filteredStudies, setFilteredStudies] = useState(main);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (typeof category == "string" && inds.includes(category)) {
      setActiveCat(category);
    }
  }, [category]);

  useEffect(() => {
    if (activeCat === "All") {
      setFilteredStudies(main);
      return;
    } else {
      setFilteredStudies(main.filter((study) => study.industry == activeCat));
    }
  }, [activeCat]);

  return (
    <div className="min-h-screen bg-light pt-28 ">
      <div className="max-w-7xl mx-auto cont w-11/12">
        <div
          ref={buttonsDiv}
          className={`flex flex-row items-center gap-10 overflow-auto pb-4 mx-auto  ${
            inds.length <= 4 ? "justify-center" : "justify-start"
          }`}
        >
          {/* w-fit if not scrollable   */}
          {inds.map((cat) => (
            <div key={cat} className="">
              <TransBtn
                onClick={() => setActiveCat(cat)}
                active={activeCat === cat}
              >
                {cat}
              </TransBtn>
            </div>
          ))}
        </div>
        <div className="cont grid grid-cols-1 md:grid-cols-3 gap-20 mt-20 place-items-stretch">
          {filteredStudies.map((study, idx) => (
            // to change key to title later
            <CaseCard
              key={study.title}
              client={study.client}
              idx={idx}
              img={study.img}
              industry={study.industry}
              route={study.route}
              title={study.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;

// "Logo and Branding
// 6 unique pages
// - Home
// - Services & Solutions
// - Thought leadership
// - About us
// - Careers/Jobs
// - Contact us
// CMS - Job Posting
// Special Flow - Job posting section to have the LCA details and on posting the jobs the LCA should get auto updated"
