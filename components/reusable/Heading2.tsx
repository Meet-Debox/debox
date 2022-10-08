import React from "react";
import clsx from "clsx";

type HeadingProps = {
  title: string;
  className?: string;
};

// after:content-["ABC"]
function Heading({ title, className }: HeadingProps) {
  return (
    <div className="">
      <h2
        className={clsx(
          "text-2xl text-black font-extrabold tracking-tight sm:text-8xl font-heading stroke halftone halftone-color after:text-2xl sm:after:text-8xl",
          className
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export default Heading;
