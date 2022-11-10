// Imports

// - Components
// -- Defaults
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// -- Custom

import Heading from "../components/reusable/Heading";
import Framework from "../components/Framework";
import SurveyCTAStrip from "../components/reusable/SurveyCTAStrip";
import CTASection from "../components/CTASection";
import { useEffect } from "react";

// -- Libraries

// -- Hooks

// - Data
const stats = [
  { label: "Solution Designers", value: "20+" },
  { label: "Problems Solved", value: "50+" },
  { label: "Countries", value: "4" },
];

const About: NextPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        // @ts-ignore
        document?.querySelector(hash).scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  });

  return (
    <div className="font-size mt-[6.4rem]">
      <div className="max-w-5xl mx-auto text-center cont">
        <h1 className="font-heading font-extrabold text-2xl md:text-5xl">
          About Debox
        </h1>
        <p className="pt-8 text-lg md:text-2xl max-w-5xl mx-auto">
          {
            "Debox is a business solutions firm that focuses on problem-solving through the use of data, logical reasoning and people-centred approach. We have a stellar record of delivering high-impact projects that have helped scale many startups, family-managed businesses and midsize corporates."
          }
        </p>

        <div className="flex flex-col gap-4 md:flex-row w-full justify-around py-8  items-center space max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-4">
              <p className="text-2xl md:text-7xl  font-heading font-extrabold italic">
                {stat.value}
              </p>
              <h3 className="text-base">{stat.label}</h3>
            </div>
          ))}
        </div>
        <p className="mt-8 italic">
          {"Debox is pronounced as De box and stands for 'Out of the box'."}
        </p>
      </div>
      {/* Story */}
      <section className="relative cont bg-light">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
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
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
              <div className="relative overflow-hidden">
                {/* <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                /> */}
                <Image
                  alt="Debox Consulting's Office Interior"
                  height={718}
                  width={850}
                  objectFit="cover"
                  className="h-full w-full absolute inset-0 top-0 left-0"
                  src={
                    "https://res.cloudinary.com/debox/image/upload/v1666350563/Debox-New/About/Office_y3pdvi.webp"
                  }
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 bg-light">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <Heading>Our Story</Heading>
              <div className="mt-6 text-black space-y-6 text-justify">
                <p className="">
                  {
                    "From redesigning and successful deployment of the Pan India Supply Chain process for Nippo Batteries to designing and developing InRadius - India's first true hyperlocal Job and Talent search platform, Debox has come a long way in solving business and real-life problems through their logical reasoning and innovative thinking."
                  }
                </p>
                {/* <p className="text-base leading-7">
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      ` {/* Who We Are */}`
      <section className="cont text-center space-y-10 mx-auto max-w-5xl w-11/12 ">
        <Heading>Who We Are</Heading>
        <p className="text-justify">
          {
            "Every member of Debox comes from different backgrounds and has a variety of experiences encompassing entrepreneurship, human resources, marketing, finance, design, commerce, and technology. Our members have worked across companies of various sizes across industries and have gained knowledge and expertise in driving change and building high-performance organizations and cultures."
          }
        </p>
      </section>
      {/* Framework */}
      <div className="bg-light">
        <section className="cont text-center space-y-10 mx-auto w-11/12">
          <Framework />
        </section>
      </div>
      <SurveyCTAStrip isDark />
      {/* How we work */}
      <section className="relative cont">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
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
              <div className="relative overflow-hidden max-h-[28rem] flex items-center">
                {/* <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                /> */}
                <Image
                  objectFit="contain"
                  alt="A team working collaboratively on a project."
                  height={960}
                  width={718}
                  className="h-full w-full absolute inset-0 top-0 left-0"
                  src={
                    "https://res.cloudinary.com/debox/image/upload/v1666350568/Debox-New/About/Abt2_zkzxhd.webp"
                  }
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-10">
              <Heading>How We Work</Heading>
              <div className="mt-6 text-black space-y-6 text-justify">
                <p className="">
                  {
                    "We design solutions by keeping people at the core whilst ensuring the business objective are fulfilled. We deep dive into the problem/opportunity at hand and understand the psychological barriers to achieving success or psychological levers that can be leveraged to gain success. Our solutions are designed by keeping a balance of both the barriers and the levers. We take pride in not only designing solutions and blueprints but also driving the solutions to success. We take a step further and ensure the solutions are sustained through structured knowledge transfer or by leveraging technology and automation."
                  }
                </p>
                {/* <p className="text-base leading-7">
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <section className="cont text-center space-y-10 mx-auto max-w-5xl w-11/12">
          <Heading>Explore Our Work</Heading>
          <p className="text-sm md:text-lg">
            {"We love working on complex business challenges, see "}
            <Link href="/case-studies" scroll={true}>
              <span className="bg-accent text-white p-1 cursor-pointer">
                the problem statements
              </span>
            </Link>
            {" we’re tackling now or explore some of our recent work."}
          </p>
        </section>
      </section>
      <CTASection redirectPage="/about" />
      {/* Hidden Form for Netlify Detection */}
      <div className="hidden">
        <form
          action={"/about?submit=true"}
          name="Contact Form"
          data-netlify="true"
          method="POST"
          className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <input type="hidden" name="form-name" value="Contact_Form" />
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name*
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name*
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company*
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 h-10 px-2 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <span id="phone-description" className="text-sm text-gray-500">
                Optional
              </span>
            </div>
            <div className="mt-1">
              <input name="phone" type="text" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="how-can-we-help"
                className="block text-sm font-medium text-gray-700"
              >
                How can we help you?*
              </label>
              {/* <span
                  id="how-can-we-help-description"
                  className="text-sm text-gray-500"
                >
                  Max. 500 characters
                </span> */}
            </div>
            <div className="mt-1">
              <textarea
                id="how-can-we-help"
                name="how-can-we-help"
                aria-describedby="how-can-we-help-description"
                rows={4}
                className="block w-full shadow-lg sm:text-md focus:ring-indigo-500 focus:border-indigo-500 border-2 border-black h-20 px-2 rounded-md"
              />
            </div>
          </div>
          <fieldset className="sm:col-span-2">
            <div className="flex w-full justify-between">
              <legend className="block text-sm font-medium text-gray-700">
                Service Requirement
              </legend>
              <span className="text-sm text-gray-500">Optional</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-y-4">
              <div className="flex items-center gap-3">
                <input
                  name="RequestFor[]"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-black border-2 px-2"
                  id={"consulting"}
                  type="checkbox"
                />
                <label htmlFor={"consulting"}>
                  <span className="block text-sm text-gray-700">
                    Consulting
                  </span>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  name="RequestFor[]"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-black border-2 px-2"
                  id={"tech"}
                  type="checkbox"
                />
                <label htmlFor={"tech"}>
                  <span className="block text-sm text-gray-700">Tech</span>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  name="RequestFor[]"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-black border-2 px-2"
                  id={"marketing"}
                  type="checkbox"
                />
                <label htmlFor={"marketing"}>
                  <span className="block text-sm text-gray-700">Marketing</span>
                </label>
              </div>
            </div>
          </fieldset>

          <div className="text-right sm:col-span-2">
            <button className="relative inline-block group focus:outline-none focus:ring cursor-pointer w-fit">
              <span
                className={`${"px-2 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm border-2"}
        relative inline-block font-bold tracking-widest text-black uppercase border-current group-active:text-opacity-75 duration-200 transition-colors hover:bg-accent hover:text-black `}
              >
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
