import React from "react";
import Heading from "../Heading";

function ApproachFindings({ approachList }: { approachList: any[] }) {
  return (
    <section className="max-w-7xl cont w-10/12 mx-auto relative">
      <>
        <div className="text-center pb-14">
          <Heading>Approach and Findings</Heading>
        </div>
        {/* items-start md:grid-cols-3 divide-x-2 divide-black divide-dashed */}
        <div className=" grid gap-8">
          {approachList.map((el: any) => (
            <div key={el.title} className="space-y-3">
              <div
                className="font-bold font-AltoneBold text-xl md:text-2xl 
                  "
              >
                <span className="bg-darkBlue text-white p-1">{el.title}</span>
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
