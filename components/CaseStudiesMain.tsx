import TransBtn from "../components/reusable/TransBtn";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Button from "../components/reusable/Button";
import Link from "next/link";
import main from "./data/index";

function CaseStudiesMain() {
  return (
    <div className="max-w-5xl overflow-auto mx-auto cont !md:pt-28 w-11/12">
      {main.slice(0, 3).map((study, idx) => (
        <div key={study.title} className={`py-8 `}>
          <div
            className={`flex items-center justify-center flex-col md:flex-row gap-3 lg:gap-8 w-full ${
              idx % 2 === 0 && "md:flex-row-reverse"
            }`}
          >
            {/* inset-x-24 -inset-y-14 */}
            <div className={`md:w-1/2 grid place-items-center`}>
              <div className="w-full relative">
                <div
                  className={clsx(
                    "hidden md:absolute",
                    idx % 2 === 0 ? "top-0 left-0" : " top-0 left-0"
                  )}
                >
                  <Image
                    src={study.side2}
                    width={391}
                    height={385}
                    objectFit="contain"
                    className={
                      "w-full h-full object-contain object-left-bottom -ml-20 "
                    }
                  />
                </div>
                <div className="w-full h-full">
                  <Image
                    // width={500}
                    // width={589}
                    // height={674}
                    objectFit="contain"
                    className="w-full h-full object-contain object-center"
                    alt={study.client + "Consulted by Debox"}
                    src={
                      study.client === "Kalki" ? study.heroBanner : study.side1
                    }
                  />
                </div>
              </div>
            </div>

            <div className=" md:w-1/2 text-lg md:text-2xl flex flex-col gap-4 sm:gap-7 md:gap-12">
              <h4>{study.client}</h4>
              <Link href={study.route}>
                <h4 className="font-heading font-bold ">
                  <span className="text-highlight !cursor-pointer">
                    {study.title}
                  </span>
                </h4>
              </Link>
              <Link href={study.route}>
                <Button>Read More</Button>
              </Link>
              <div className="space-x-4">
                <Link href={"/case-studies?category=" + study.industry}>
                  <TransBtn size="sm">{study.industry}</TransBtn>
                </Link>
                {study.tags.map((tag) => (
                  <TransBtn key={tag} size="sm">
                    {tag}
                  </TransBtn>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center">
        <Link href={"/case-studies"}>
          <Button>See All</Button>
        </Link>
      </div>
    </div>
  );
}

export default CaseStudiesMain;
