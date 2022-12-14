import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  return (
    <h2 className="text-2xl text-black font-extrabold tracking-tight sm:text-4xl font-heading ">
      {children}
    </h2>
  );
}

export default Heading;
