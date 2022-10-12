import React from "react";
import Heading from "../Heading";
import main from "../../data";
import CaseCard from "../CaseCard";

function MoreStudies({ title }: { title: string }) {
  return (
    <>
      <div className="max-w-7xl w-10/12 mx-auto cont ">
        <Heading>
          <span className="text-center block">Read another success story.</span>
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20 place-items-stretch  mx-auto">
          {main
            .filter((study) => study.title != title)
            .slice(0, 3)
            .map((study, idx) => (
              <CaseCard
                key={study.title}
                client={study.client}
                idx={idx}
                img1={study.side1}
                img2={study.side2}
                bannerImg={study.heroBanner}
                industry={study.industry}
                route={study.route}
                title={study.title}
                tags={study.tags}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default MoreStudies;
