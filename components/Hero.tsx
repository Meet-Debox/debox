import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

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
    <div>
      <BgVid />
    </div>
  );
}

export default Hero;
