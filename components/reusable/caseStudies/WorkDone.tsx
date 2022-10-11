import React from "react";
import Heading2 from "../Heading2";
function WorkDone({
  summaryJsx,
  listJsx,
}: {
  summaryJsx: () => React.ReactNode;
  listJsx: () => React.ReactNode;
}) {
  return (
    <div className="bg-light">
      <div className=" max-w-7xl space-y-8 md:space-y-0 md:grid md:justify-start md:items-center md:grid-cols-2 cont mx-auto w-10/12">
        <Heading2
          title="Work Done"
          className="after:content-['Work_Done'] after:top-18 after:left-[50.7%] w-full mx-auto after:w-full"
        />
        <p className="text-justify">{summaryJsx()}</p>
      </div>

      <div>
        <div className="mx-auto cont -mt-14 w-10/12 max-w-5xl">{listJsx()}</div>
      </div>
    </div>
  );
}

export default WorkDone;
