import React from "react";
import Heading2 from "../Heading2";

function Outcome({ content }: { content: string | (() => React.ReactNode) }) {
  return (
    <div className="max-w-7xl space-y-8 cont mx-auto w-10/12 md:space-y-0 md:grid md:justify-start md:items-center md:grid-cols-2">
      <Heading2
        title="Outcome"
        className="after:content-['Outcome'] after:left-[49.4%] mx-auto"
      />
      <div>{typeof content === "string" ? content : content()}</div>
    </div>
  );
}

export default Outcome;
