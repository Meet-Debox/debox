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
// -- Libraries

// -- Hooks

// - Media
// import img from "../public/CAI.webp";

// - Data
const stats = [
  { label: "Employees", value: "20+" },
  { label: "Projects", value: "30+" },
  { label: "Countries", value: "3" },
];

const About: NextPage = () => {
  return (
    <div className="font-size mt-40">
      <div className="max-w-5xl mx-auto text-center container">
        <h1 className="">About Debox</h1>
        <p className="pt-8 text-4xl">
          {
            "Debox is a business solutions firm that focuses on problem-solving through the use of data, logical reasoning and people-centred approach. We have a stellar record of delivering high-impact projects that have helped scale many startups, family-managed businesses and midsize corporates."
          }
        </p>

        <div className="flex flex-col gap-4 md:flex-row w-full justify-around py-8  items-center space">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-4">
              <h3 className="text-base">{stat.label}</h3>
              <p className="text-4xl">{stat.value}</p>
            </div>
          ))}
        </div>
        <p>Debox at a glance </p>
        <p>Debox is pronounced as De box and stands for 'Out of the box'.</p>
      </div>
      {/* Story */}
      <section className="relative container">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-primary rounded-r-3xl lg:right-72" />
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
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <div className="absolute inset-0 bg-accent/20  " />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-accent/10" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <Heading>Our Story</Heading>
              <div className="mt-6 text-black space-y-6">
                <p className="">
                  From redesigning and successful deployment of the Supply Chain
                  process for Nippo Batteries to designing and developing
                  India's first true hyperlocal job and Talent search platform,
                  Debox has come a long way in solving business and real-life
                  problems through their logical reasoning and innovative
                  thinking.
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
      <section className="container text-center space-y-10 mx-auto max-w-5xl">
        <Heading>Who we are</Heading>
        <p className="leading-relaxed">
          Every member of Debox comes from different educational backgrounds and
          a variety of experiences encompassing entrepreneurship, human
          resources, marketing, finance, design, commerce, and technology. Our
          members have worked across companies of various sizes across
          industries and have gained knowledge and expertise in driving change
          and building higher-performance organizations and cultures.
        </p>
      </section>
      {/* Framework */}
      <section className="container text-center space-y-10 mx-auto max-w-5xl">
        <Heading>Growth and Culture Sustainability Framework</Heading>
        <ol className="text-lg leading-relaxed list-decimal list-inside space-y-2.5">
          <li>Objective and Value Setting</li>
          <li>Right People</li>
          <li>Efficient Systems and Processes</li>
          <li>Effective Communication</li>
          <li>Workplace and Environment</li>
          <li>Digital Transformation</li>
        </ol>
        <Button>Take an Audit</Button>
        {/* <p className="text-lg leading-relaxed">
          Every member of Debox comes from different educational backgrounds and
          a variety of experiences encompassing entrepreneurship, human
          resources, marketing, finance, design, commerce, and technology. Our
          members have worked across companies of various sizes across
          industries and have gained knowledge and expertise in driving change
          and building higher-performance organizations and cultures.
        </p> */}
      </section>
      <section className="container text-center space-y-10 mx-auto max-w-5xl">
        <Heading>How we work</Heading>
        <p>
          We design solutions by keeping people at the core whilst ensuring the
          business objective are fulfilled. We deep into the problem/opportunity
          at hand and understand the psychological barriers to achieving success
          or psychological levers that can be leveraged to gain success. Our
          solutions are designed by keeping a balance of both the barriers and
          the levers. We take pride in not only designing solutions and
          blueprints but also driving the solutions to success. We don't stop
          there, we ensure the solutions are sustained through structured
          knowledge transfer or by leveraging technology and automation.
        </p>
      </section>

      <section>
        <section className="container text-center space-y-10 mx-auto max-w-5xl">
          <Heading>Explore our work</Heading>
          <p>
            We love working on complex business challenges, see{" "}
            <Link href="/case-studies">the problem statements</Link> we’re
            tackling now or explore some of our recent work below
          </p>
        </section>
      </section>
    </div>
  );
};

export default About;
