import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Description from "../components/Description";
import CaseStudiesMain from "../components/CaseStudiesMain";

import Button from "../components/reusable/Button";
import SurveyCTAStrip from "../components/reusable/SurveyCTAStrip";
import ClientCarousel from "../components/reusable/ClientCarousel";
import Arrow1 from "../components/reusable/icons/Arrow1";
import FooterBlob from "../components/reusable/FooterBlob";

// import hero from '../public/hero-vid.mp4'

const Home: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 5000);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* <div className="h-screen " /> */}
      <Hero />
      <div className="bg-white z-20">
        <Description />
      </div>
      {/* Case Studies */}
      <div className="bg-light relative">
        <Arrow1 className="absolute left-[75%] h-24 w-20 -mt-11 z-10" />
        <CaseStudiesMain />
      </div>
      <SurveyCTAStrip isDark />
      <ClientCarousel />
      {/* <FooterBlob /> */}
    </div>
  );
};

export default Home;
