import React from "react";
import Heading2 from "../Heading2";

function ProblemStatement({
  type,
  content,
}: {
  type: "Problem Statement" | "Opportunity";
  content: string | (() => React.ReactNode);
}) {
  return (
    <section className="cont max-w-7xl mx-auto w-10/12 space-y-10 grid md:space-y-0 md:grid md:justify-start md:items-center md:grid-cols-2 ">
      <Heading2
        title={
          type === "Problem Statement" ? "Problem Statement" : "Opportunity"
        }
        className={`${
          type === "Problem Statement"
            ? "after:content-['Problem_Statement']"
            : "after:content-['Opportunity']"
        } after:left-[50.6%] after:top-[50%] md:text-center md:after:text-center`}
      />
      <p className="text-justify">
        {typeof content === "string" ? content : content()}
      </p>
    </section>
  );
}

export default ProblemStatement;
