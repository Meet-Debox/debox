import React from "react";
import clsx from "clsx";

type HeadingProps = {
  title: string;
  className?: string;
};

// after:content-["ABC"]
function Heading2({ title, className }: HeadingProps) {
  return (
    <div className="">
      <h2
        className={clsx(
          "text-5xl after:text-5xl lg:text-7xl lg:after:text-7xl after:w-full text-black font-extrabold tracking-tight font-heading stroke halftone halftone-color ",
          className
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export default Heading2;
