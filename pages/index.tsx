import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Description from "../components/Description";
import CaseStudiesMain from "../components/CaseStudiesMain";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Button from "../components/reusable/Button";
import SurveyCTAStrip from "../components/reusable/SurveyCTAStrip";
import ClientCarousel from "../components/reusable/ClientCarousel";
import Arrow1 from "../components/reusable/icons/Arrow1";
import FooterBlob from "../components/reusable/FooterBlob";

const MySwal = withReactContent(Swal);
// import hero from '../public/hero-vid.mp4'

import { motion } from "framer-motion";

const Home: NextPage = () => {
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (query && query.submit === "true") {
      MySwal.fire({
        icon: "success",
        titleText: "Success",
        text: "Thank you for submitting an enquiry. We'll get back to you as soon as possible.",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  }, [query]);

  return (
    <motion.div key={"index"} exit={{}}>
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
    </motion.div>
  );
};

export default Home;
