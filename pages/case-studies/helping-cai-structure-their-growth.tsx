import React, { MutableRefObject } from "react";
import { useRouter } from "next/router";
import main from "../../components/data";
import { useState, useEffect, useRef } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import Heading from "../../components/reusable/Heading";
import TransBtn from "../../components/reusable/TransBtn";
import CaseCard from "../../components/reusable/CaseCard";
import SurveyCTAStrip from "../../components/reusable/SurveyCTAStrip";
import FrameworkCard from "../../components/reusable/FrameworkCard";
import Heading2 from "../../components/reusable/Heading2";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function CAI() {
  const post = main[0];

  const imgArray: Array<any> = [useRef(null), useRef(null)];
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    imgArray.forEach((img, index) => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "+=60%",
          scrub: true,
        },
      });
      tl.to(imgArray[index], { scale: 1 });
    });
  }, []);

  return (
    <div className="">
      <div className="h-screen">
        {/* <img src={post.img[1]} alt="" srcset="" /> */}
        <Image layout="fill" className="h-screen w-screen" src={post.img[0]} />
      </div>
      <div className="max-w-7xl mx-auto grid place-items-center">
        <div className="font-size pt-8 max-w-2xl z-10 bg-white md:px-20 -mt-60 mx-auto text-center pb-8 md:pb-20">
          <TransBtn size="sm">{post.industry}</TransBtn>
          <h4 className="font-heading font-bold mt-8 mb-20 text-xl md:text-3xl">
            {post.title}
          </h4>
          <div className="space-y-3">
            <p className="text-sm uppercase font-bold">Client</p>
            {/* <p>{post.client}</p> */}
            {/* @ts-ignore */}
            <Image height={140} width={150} src={post.logo} />
          </div>
        </div>
      </div>
      {/* About Client */}
      <section className="relative cont">
        <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0 lg:order-2">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 xl:left-auto lg:top-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-primary"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-10">
              <div className="relative overflow-hidden max-h-[30rem]">
                {/* <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            /> */}
                <Image
                  objectFit="cover"
                  className="h-full w-full absolute inset-0 top-0 left-0"
                  src={post.img[2]}
                />
              </div>
            </div>
          </div>
          {/* About the Client */}
          {typeof post.about !== "undefined" && (
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-10">
                <Heading>About the Client</Heading>
                <div className="mt-6 text-black space-y-6 text-justify">
                  {post.about()}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Image Break */}
      <div
        ref={(el) => (imgArray[1] = el)}
        className="h-[28rem] bg-no-repeat bg-cover blog-wide-img"
        style={{
          background: `url("/studies/CAI/CAI2.png") no-repeat center center`,
          backgroundSize: "cover",
        }}
      />
      <section className="cont max-w-7xl mx-auto w-11/12 space-y-10 grid md:space-y-0 md:grid md:justify-start md:items-center md:grid-cols-2 ">
        <Heading2
          title="Problem Statement"
          className="after:content-['Problem_Statement'] after:left-[19.8rem] after:top-24 text-center after:text-center"
        />
        <p className="text-justify">
          With the fast-paced growth, the founders (Dhanraj Minawala and
          Aradhana Minawala) were stuck in the day-to-day operations and issue
          resolutions. With the anticipation of growth, the founders wanted to
          build a team and bring in some structure, systems and processes to
          sustain the growth more efficiently.
        </p>
      </section>
      {/* Timeline and Info */}
      <section className="relative cont bg-light">
        <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0 lg:order-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-primary"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-10">
              <div className="relative overflow-hidden max-h-96">
                {/* <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            /> */}
                <Image
                  objectPosition={"bottom bottom"}
                  objectFit="contain"
                  className="h-full w-full absolute inset-0 top-0 left-0 max-h-96"
                  src={post.img[3]}
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20 text-justify space-y-20 ">
              <div className="space-y-4">
                <Heading>Project Timeline</Heading>
                <p>{post.timeline}</p>
              </div>
              <div className="space-y-4">
                <Heading>Project Info</Heading>
                <p>{post.projInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach and findings */}
      {typeof post.approachFindings !== "undefined" && (
        <section className="max-w-7xl cont max-w-11/12 mx-auto">
          {post.approachFindings()}
        </section>
      )}

      {/* Work Done */}
      <div className="bg-light">
        {typeof post.workDoneSum !== "undefined" && (
          <div className="max-w-7xl space-y-8 md:space-y-0 md:grid md:justify-start md:items-center md:grid-cols-2 cont mx-auto w-11/12">
            {/* <Heading>
            <span className="">Work Done</span>
          </Heading> */}
            <Heading2
              title="Work Done"
              className="after:content-['Work_Done'] after:top-18 after:left-[50.7%] w-full mx-auto after:w-full"
            />
            <p className="text-justify">{post.workDoneSum()}</p>
          </div>
        )}

        {typeof post.workDoneList !== "undefined" && (
          <div className="max-w-5xl mx-auto cont w-11/12">
            {post.workDoneList()}
          </div>
        )}
      </div>

      {/* Numbered List */}

      {/* Image Break */}
      <div
        ref={(el) => (imgArray[0] = el)}
        className="h-[28rem] bg-no-repeat bg-cover blog-wide-img"
        style={{
          background: `url("/studies/CAI/CAI5.png") no-repeat center center`,
          backgroundSize: "cover",
        }}
      />

      {/* Outcome */}
      {typeof post.outcome !== "undefined" && (
        <div className="max-w-7xl space-y-8 cont mx-auto w-11/12 md:space-y-0 md:grid md:justify-start md:items-center md:grid-cols-2">
          <Heading2
            title="Outcome"
            className="after:content-['Outcome'] after:overflow-clip after:left-[49.4%]"
          />
          {post.outcome()}
        </div>
      )}

      {/*Framework / Learnings */}
      {typeof post.framework !== "undefined" && (
        <div className="bg-light">
          <div className="max-w-7xl space-y-8 cont mx-auto w-11/12">
            <Heading>Framework and Learnings</Heading>

            {post.framework()}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {post.testimonials &&
        post.testimonials?.length > 0 &&
        post.testimonials.map((el: any) => (
          <div
            key={el.by}
            className="cont max-w-5xl mx-auto space-y-8 text-center w-11/12"
          >
            <Heading>Testimonial</Heading>
            <div className="relative">
              <span className="italic relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-6 md:-translate-x-8 -translate-y-4 h-6 w-6 md:h-8 md:w-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                {el.content}
                <svg
                  className="absolute bottom-0 right-0 transform translate-x-10 -translate-y-1 h-6 w-6 md:h-8 md:w-8 text-accent rotate-180"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </span>
            </div>

            <div className="flex items-center justify-center gap-7">
              <div>
                <Image height={150} width={150} src={el.img} />
              </div>
              <div className="relative">
                <h6 className="font-bold text-left sm:text-center">{el.by}</h6>
                <h6 className="text-left">{el.designation}</h6>
              </div>
            </div>
          </div>
        ))}
      {}

      {/*  */}

      <SurveyCTAStrip isDark />

      {/* Related */}

      <div className="max-w-7xl w-11/12 mx-auto cont ">
        <Heading>
          <span className="text-center block">Read another success story.</span>
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20 place-items-stretch">
          {main
            .filter((study) => study.title != post.title)
            .slice(0, 3)
            .map((study, idx) => (
              <CaseCard
                key={study.title}
                client={study.client}
                idx={idx}
                img={study.img}
                industry={study.industry}
                route={study.route}
                title={study.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CAI;
