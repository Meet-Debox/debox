import React from "react";
import Heading from "../Heading";

function FrameworkWrapper({
  contentJsx,
}: {
  contentJsx: () => React.ReactNode;
}) {
  return (
    <div className="bg-light">
      <div className="max-w-7xl space-y-8 cont mx-auto w-10/12">
        <Heading>Frameworks used in the project</Heading>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 w-full h-full justify-items-center">
          {contentJsx()}
        </div>
      </div>
    </div>
  );
}

export default FrameworkWrapper;
