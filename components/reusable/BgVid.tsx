import React from "react";
const ReactRotatingText = require("react-rotating-text");
// @ts-ignore
import YoutubeBackground from "react-youtube-background";

function BgVid() {
  return (
    <div className="z-[-1] absolute top-0 left-0 h-screen w-[99.5vw]  bg-white/40">
      <YoutubeBackground className="h-full w-full" videoId={"ncYEo1m7i2U"}>
        <div className="max-w-7xl mx-auto ">
          <div className="z-10 h-screen mx-auto flex items-center w-[95%]">
            <h2 className="font-bold font-heading text-xl  md:text-4xl text-white md:w-[60%]">
              Partnering with SMEs, Family Managed Businesses and Startups in{" "}
              <div className="">
                driving{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-primary">
                  <ReactRotatingText
                    items={["Growth.", "Sustainability.", "Culture."]}
                  />
                </span>
              </div>
            </h2>
          </div>
        </div>
      </YoutubeBackground>
    </div>
  );
}

export default BgVid;
