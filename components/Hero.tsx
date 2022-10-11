import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Vimeo from "@u-wave/react-vimeo";
import BackgroundVideo from "./reusable/VimeoVid";

const BgVid = dynamic(() => import("./reusable/BgVid"), {
  ssr: false,
});

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [vidHtml, setVidHtml] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    //   videoRef.current?.play();
    // }, 5000);
  }, []);

  return (
    <div className="-z-20">
      {/* <BackgroundVideo /> */}
      <BgVid />
    </div>
  );
}

export default Hero;
