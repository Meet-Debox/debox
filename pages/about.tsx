// Imports

// - Components
// -- Defaults
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// -- Custom
import Button from "../components/reusable/Button";
import Heading from "../components/reusable/Heading";
import Framework from "../components/Framework";
import SurveyCTAStrip from "../components/reusable/SurveyCTAStrip";
// -- Libraries

// -- Hooks

// - Media
import office from "../assets/Office.png";
import Abt2 from "../assets/Abt2.png";
// - Data
const stats = [
  { label: "Solution Designers", value: "20+" },
  { label: "Problems Solved", value: "50+" },
  { label: "Countries", value: "4" },
];

const About: NextPage = () => {
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
        <Button>Debox at a glance</Button>
        <p className="mt-8 italic">
          {"Debox is pronounced as De box and stands for 'Out of the box'."}
        </p>
      </div>
      {/* Story */}
      <section className="relative cont">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
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
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative overflow-hidden">
                {/* <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                /> */}
                <Image
                  objectFit="cover"
                  className="h-full w-full absolute inset-0 top-0 left-0"
                  src={office}
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <Heading>Our Story</Heading>
              <div className="mt-6 text-black space-y-6 text-justify">
                <p className="">
                  {
                    "From redesigning and successful deployment of the Supply Chain process for Nippo Batteries to designing and developing India's first true hyperlocal job and Talent search platform, Debox come a long way in solving business and real-life problems through their logical reasoning and innovative thinking."
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
      {/* Who We Are */}
      <section className="cont text-center space-y-10 mx-auto max-w-5xl w-11/12">
        <Heading>Who we are</Heading>
        <p className="text-justify">
          {
            "Every member of Debox comes from different educational backgrounds and a variety of experiences encompassing entrepreneurship, human resources, marketing, finance, design, commerce, and technology. Our members have worked across companies of various sizes across industries and have gained knowledge and expertise in driving change and building higher-performance organizations and cultures."
          }
        </p>
      </section>
      {/* Framework */}
      <section className="cont text-center space-y-10 mx-auto w-11/12">
        <Framework />
      </section>
      <SurveyCTAStrip />
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
              <div className="relative overflow-hidden">
                {/* <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                /> */}
                <Image
                  objectFit="cover"
                  className="h-full w-full absolute inset-0 top-0 left-0"
                  src={Abt2}
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-10">
              <Heading>How we work</Heading>
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
      <section>
        <section className="cont text-center space-y-10 mx-auto max-w-5xl">
          <Heading>Explore our work</Heading>
          <p>
            {"We love working on complex business challenges, see "}
            <Link href="/case-studies">
              <span className="bg-accent p-1 underline cursor-pointer">
                the problem statements
              </span>
            </Link>
            {" we’ve tackled."}
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
