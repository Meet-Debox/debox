import React, { useEffect, useRef } from "react";
import Heading from "../Heading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ApproachFindings({ approachList }: { approachList: any[] }) {
  let containerDiv = useRef<HTMLDivElement | null>(null);
  let highlightArray = [];
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Highlight Effect
    highlightArray = Array.from(
      // @ts-ignore
      containerDiv.current.querySelectorAll(".text-highlight")
    );

    console.log(highlightArray);

    highlightArray.forEach((highlight) => {
      ScrollTrigger.create({
        trigger: highlight,
        start: "top bottom",
        onEnter: () => highlight.classList.add("active"),
        // onLeave: () => highlight.classList.remove("active")
      });
    });
  });

  return (
    <section className="max-w-7xl cont w-10/12 mx-auto relative">
      <>
        <div className="text-center pb-14">
          <Heading>Approach and Findings</Heading>
        </div>
        {/* items-start md:grid-cols-3 divide-x-2 divide-black divide-dashed */}
        <div ref={containerDiv} className=" grid gap-8">
          {approachList.map((el: any) => (
            <div key={el.title} className="space-y-3">
              <div
                className="font-bold font-AltoneBold text-xl md:text-2xl 
                  "
              >
                <mark className="text-highlight">{el.title}</mark>
              </div>
              <p className="text-justify">{el.description}</p>
            </div>
          ))}
        </div>
      </>
    </section>
  );
}

export default ApproachFindings;
