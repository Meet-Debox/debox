import TransBtn from "../components/reusable/TransBtn";
import React from "react";
import Image from "next/image";
import CAI from "../public/CAI.png";
import CAI2 from "../public/CAI2.png";
import KALKI from "../public/KALKI.png";
import KALKI2 from "../public/KALKI2.png";
import JUNO from "../public/JUNO.png";
import JUNO2 from "../public/JUNO2.png";
import clsx from "clsx";
import Button from "../components/reusable/Button";

const main = [
  {
    client: "CAI Store",
    title:
      "Check how we helped a fast-growing women's footwear startup to structure their growth.",
    img: [CAI, CAI2],
    route: "/",
    industry: "Fashion",
  },
  {
    client: "Kalki Fashion",
    title:
      "Check how we helped a fast-growing women's fashion brand to scale to newer heights by designing a Performance Management process along with data trackers and dashboards.",
    img: [KALKI, KALKI2],
    route: "/",
    industry: "Fashion",
  },
  {
    client: "Juno's Pizza",
    title:
      "Check how we helped a fast-growing pizza chain structure their growth plan and drive efficiency.",
    img: [JUNO, JUNO2],
    route: "/",
    industry: "Food",
  },
];

function CaseStudiesMain() {
  return (
    <div className="max-w-5xl overflow-auto mx-auto cont !pt-28 w-11/12">
      {main.map((study, idx) => (
        <div key={study.title} className={`py-8 `}>
          <div
            className={`flex items-center justify-center flex-col md:flex-row gap-4 md:gap-8 w-full ${
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
                    src={study.img[1]}
                    width={391}
                    height={385}
                    objectFit="contain"
                    className={
                      "w-full h-full object-contain object-left-bottom -ml-20"
                    }
                  />
                </div>
                <div className="w-full h-full">
                  <Image
                    // width={500}
                    width={589}
                    height={674}
                    objectFit="contain"
                    className="w-full h-full object-contain object-center"
                    alt={study.client + "Consulted by Debox"}
                    src={study.img[0]}
                  />
                </div>
              </div>
            </div>

            <div className=" md:w-1/2 text-lg md:text-2xl flex flex-col gap-12">
              <h4>{study.client}</h4>
              <h4 className="font-heading font-bold">{study.title}</h4>
              <Button>Read More</Button>
              <TransBtn>
                <h4>{study.industry}</h4>
              </TransBtn>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center">
        <Button>See All</Button>
      </div>
    </div>
  );
}

export default CaseStudiesMain;
