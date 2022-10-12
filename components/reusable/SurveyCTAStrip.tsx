import React from "react";

function SurveyCTAStrip({ isDark = false }: { isDark?: boolean }) {
  return (
    <div className={`${isDark && "bg-accent text-white"}`}>
      <div className="max-w-5xl text-center w-11/12 cont mx-auto font-bold">
        <div className="md:text-2xl">
          <p>Check where your company stands</p>
          <p>
            on our{" "}
            <span className={`px-1 py-1 ${isDark ? "" : "bg-accent"}`}>
              Growth and Culture Sustainability Framework
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-6 gap-2 group w-fit mx-auto cursor-not-allowed">
          <h4
            className={`${
              isDark ? "group-hover:text-darkBlue" : "group-hover:text-primary"
            } duration-200 transition-colors`}
          >
            Coming Soon!
          </h4>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${
                isDark
                  ? "group-hover:text-darkBlue"
                  : "group-hover:text-primary"
              } duration-200 transition-colors animate-bounce`}
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
