import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import TransBtn from "../../components/reusable/TransBtn";
import React from "react";
import main from "../../components/data/index";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CaseCard from "../../components/reusable/CaseCard";

const allInds = main.map((study) => study.industry);
const uniqueInds = allInds.filter((v, i, a) => a.indexOf(v) === i);
const inds = ["All", ...uniqueInds];

const CaseStudies: NextPage = () => {
  const buttonsDiv = useRef<HTMLDivElement>(null);
  const [activeCat, setActiveCat] = useState<string>("All");
  const [filteredStudies, setFilteredStudies] = useState(main);

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (typeof category == "string" && inds.includes(category)) {
      if (category === "All") {
        setFilteredStudies(main);
        return;
      }
      setFilteredStudies(main.filter((study) => study.industry == category));
    }
  }, [category]);

  // useEffect(() => {
  //   if (activeCat === "All") {
  //     setFilteredStudies(main);
  //     return;
  //   } else {
  //     setFilteredStudies(main.filter((study) => study.industry == activeCat));
  //   }
  // }, [activeCat]);

  return (
    <div className="min-h-screen bg-light pt-28 ">
      <div className="max-w-7xl mx-auto cont w-11/12">
        <div
          ref={buttonsDiv}
          className={`flex flex-row items-center gap-10 overflow-auto pb-4 mx-auto  ${
            inds.length <= 2 ? "justify-center" : "justify-start"
          }`}
        >
          {/* w-fit if not scrollable   */}
          {inds.map((cat) => (
            <div key={cat} className="">
              <TransBtn
                onClick={() => router.push("/case-studies?category=" + cat)}
                active={category === cat}
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
              key={"CC" + idx}
              client={study.client}
              idx={idx}
              img1={study.side1}
              img2={study.side2}
              industry={study.industry}
              route={study.route}
              title={study.title}
              tags={study.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
