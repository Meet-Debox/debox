import React from "react";

function SurveyCTAStrip() {
  return (
    <div className="bg-darkBlue text-white">
      <div className="max-w-5xl text-center w-11/12 cont mx-auto font-bold">
        <div className="">
          Check where your company stands on our Growth and Culture
          Sustainability Framework
        </div>
        <div className="flex flex-col justify-center items-center pt-6 gap-2 group w-fit mx-auto cursor-pointer">
          <h4 className="text-teal-50 group-hover:text-accent duration-200 transition-colors">
            Start Now
          </h4>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 group-hover:text-accent duration-200 transition-colors animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyCTAStrip;
