import { url } from "inspector";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import main from "../../components/data";
import Button from "../../components/reusable/Button";
import TransBtn from "../../components/reusable/TransBtn";
import arrow from "../../components/reusable/arrow.png";
import Heading from "../../components/reusable/Heading";
import SurveyCTAStrip from "../../components/reusable/SurveyCTAStrip";
import CaseCard from "../../components/reusable/CaseCard";

const post = main[0];

function index() {
  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="h-screen">
        {/* <img src={post.img[1]} alt="" srcset="" /> */}
        <Image layout="fill" className="h-screen w-screen" src={post.img[0]} />
      </div>
      <div className="max-w-7xl mx-auto grid place-items-center">
        <div className="font-size pt-8 !max-w-2xl z-10 bg-white px-20 -mt-60 mx-auto text-center pb-20">
          <TransBtn size="sm">{post.industry}</TransBtn>
          <h4 className="font-heading font-bold mt-8 mb-20 text-xl md:text-3xl">
            {post.title}
          </h4>
          <div className="space-y-3">
            <p className="text-sm uppercase font-bold">Client</p>
            <p>{post.client}</p>
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
              <div className="relative overflow-hidden">
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

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-10">
              <Heading>About the Client</Heading>
              <div className="mt-6 text-black space-y-6 text-justify">
                {post.about()}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image Break */}
      <div
        className="h-[28rem] bg-no-repeat bg-cover"
        style={{
          background: `url("/studies/CAI/CAI2.png") no-repeat center center`,
          backgroundSize: "cover",
        }}
      />
      <section className="cont max-w-7xl mx-auto w-11/12 space-y-10 ">
        <Heading>Problem Statement/Opportunity</Heading>
        <p>
          With the fast-paced growth, the founders (Dhanraj Minawala and
          Aradhana Minawala) were stuck in the day-to-day operations and issue
          resolutions. With the anticipation of growth, the founders wanted to
          build a team and bring in some structure, systems and processes to
          sustain the growth more efficiently.
        </p>
      </section>
      {/* Timeline and Info */}
      <section className="relative cont">
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
              <div className="relative overflow-hidden">
                {/* <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                /> */}
                <Image
                  objectFit="cover"
                  className="h-full w-full absolute inset-0 top-0 left-0"
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
      {/* Image Break */}
      <div
        className="h-[28rem] bg-no-repeat bg-cover"
        style={{
          background: `url("/studies/CAI/CAI5.png") no-repeat center center`,
          backgroundSize: "cover",
        }}
      />

      {/* Work Done */}

      <div className="max-w-7xl space-y-8 cont mx-auto w-11/12">
        <Heading>Work Done</Heading>
        {post.workDone()}
      </div>

      {/* Outcome */}

      <div className="max-w-7xl space-y-8 cont mx-auto w-11/12">
        <Heading>Outcome</Heading>
        {post.outcome()}
      </div>
      {/* Learnings */}
      <div className="max-w-7xl space-y-8 cont mx-auto w-11/12">
        <Heading>Framework and Learnings</Heading>
        {post.framework()}
      </div>
      {/* Testimonials */}
      {post.testimonials &&
        post.testimonials?.length > 0 &&
        post.testimonials.map((el) => (
          <div className="cont max-w-5xl mx-auto space-y-8 text-center">
            <Heading>Testimonials</Heading>
            <div className="italic">{el.content}</div>

            <div className="flex items-center justify-center gap-7">
              <div>
                <Image height={150} width={150} src={el.img} />
              </div>
              <div>
                <h6 className="font-bold">{el.by}</h6>
                <h6 className="text-left">{el.designation}</h6>
              </div>
            </div>
          </div>
        ))}

      {/*  */}

      <SurveyCTAStrip isDark />

      {/* Related */}

      <div className="max-w-7xl w-11/12 mx-auto cont ">
        <Heading>
          <span className="text-center block">Read another success story.</span>
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20 place-items-stretch">
          {main
            .filter((study) => study.title != post.title)
            .slice(0, 3)
            .map((study, idx) => (
              <CaseCard
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

export default index;
