import React from "react";
const ReactRotatingText = require("react-rotating-text");
import { useState } from "react";
// @ts-ignore
import YoutubeBackground from "react-youtube-background";

function BgVid() {
  const [activeColor, setActiveColor] = useState([
    {
      name: "Growth",
      col: "bg-primary",
      isActive: true,
    },
    {
      name: "Sustainability",
      col: "bg-accent",
      isActive: false,
    },
    {
      name: "Culture",
      col: "bg-darkBlue",
      isActive: false,
    },
  ]);

  const handleChange = () => {
    setActiveColor((prev) => {
      const curCol = prev.find((el) => el.isActive);

      // @ts-ignore
      const curColInd = prev.indexOf(curCol);
      const nextInd = curColInd === 2 ? 0 : curColInd + 1;

      const newArr = [...prev];

      newArr[curColInd].isActive = false;
      newArr[nextInd].isActive = true;

      // console.log(newArr);

      return newArr;
    });
  };

  return (
    // <div className="z-[-1] absolute top-0 left-0  overflow-hidden bg-white/40">
    //   <div className="max-w-[99.6vw] overflow-clip">
    <YoutubeBackground
      className="h-screen w-screen absolute top-0 left-0 -z-50 overflow-x-hidden"
      videoId={"PL73i1KfQp8"}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="z-10 h-screen mx-auto flex items-center w-[95%]">
          <h1 className="font-bold font-heading text-xl  md:text-4xl text-white md:w-[55%]">
            Partnering with SMEs, Family Managed Businesses and Startups in{" "}
            driving{" "}
            <span className={`${activeColor.find((el) => el.isActive)?.col}`}>
              <ReactRotatingText
                // eraseMode="overwrite"
                onDeletingEnd={handleChange}
                // cursor={false}
                items={["Growth.", "Sustainability.", "Culture."]}
              />
            </span>
          </h1>
        </div>
      </div>
    </YoutubeBackground>
    //   </div>
    // </div>
  );
}

export default BgVid;
