import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Description from "../components/Description";
import CaseStudiesMain from "../components/CaseStudiesMain";
import Vimeo from "@u-wave/react-vimeo";
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
      <Head>
        <title>Debox Consulting</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-screen " />

      {/* <div className="absolute top-0 left-0 h-screen w-full">
        <Vimeo
          video="https://vimeo.com/755028107"
          // controls={false}
          background={false}
          // quality="540p"
        />
      </div> */}
      <Hero />
      <Description />
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
