import Heading from "../reusable/Heading";
import clsx from "clsx";

import CAILogo from "../../public/Logo/05.jpg";
import CAI from "../../public/studies/CAI/CAI.png";
import CAI2 from "../../public/studies/CAI/CAI2.png";
import CAI3 from "../../public/studies/CAI/CAI3.png";
import CAI4 from "../../public/studies/CAI/CAI4.png";
import CAI5 from "../../public/studies/CAI/CAI5.png";
import Aradh from "../../public/studies/CAI/Aradh.png";
import KALKI from "../../public/studies/Kalki/KALKI.png";
import KALKI2 from "../../public/studies/Kalki/KALKI2.png";

import Arrow1 from "../reusable/Arrow1";

import JUNO from "../../public/studies/JUNO/JUNO.png";
import JUNO2 from "../../public/studies/JUNO/JUNO2.png";

import FrameworkCard from "../reusable/FrameworkCard";

const deliveredList = [
  "Detailed Job Descriptions for all roles (current and near-future basis of the Business and Manpower plan)",
  "Documented existing processes and re-engineered them to bring more efficiency and automated processes that were critical to ensuring mistake proofing",
  "Created checklists and process flows to provide people more clarity and minimize mistakes and rework",
  "Communicated the Job Descriptions and Processes to all individuals and explained how these are going to help them improve their work and output and incorporated their inputs",
  "Analysed business data and created an 18-month business plan along with a growth-mapped Manpower Planning",
];

const cai = {
  client: "CAI Store",
  logo: CAILogo,
  slug: "helping-cai-structure-their-growth",
  route: `/case-studies/helping-cai-structure-their-growth`,
  title:
    "Check how we helped a fast-growing women's footwear startup to structure their growth.",
  img: [CAI, CAI2, CAI3, CAI4, CAI5],
  industry: "Fashion",
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "CAI is the brainchild of Aradhana & Dhanraj Minawala, two entrepreneurs who dared to take an unprecedented business stride, and shaped an extraordinary trend in the footwear industry. The CAI store was launched in 2015 with the sole purpose of providing non-leather footwear locally and globally to the trend-conscious at affordable prices."
          }
        </p>
        <p>
          {
            " The CAI Store has served more than 2,00,000 happy customers to date and has grown 6x times since March 2020."
          }
        </p>
        <p>
          Website:{" "}
          <a href="https://thecaistore.com/">https://thecaistore.com/</a>
        </p>
      </div>
    );
  },
  problem:
    "With the fast-paced growth, the founders (Dhanraj Minawala and Aradhana Minawala) were stuck in the day-to-day operations and issue resolutions. With the anticipation of growth, the founders wanted to build a team and bring in some structure, systems and processes to sustain the growth more efficiently.",
  timeline: "October 2019 - March 2020",
  projInfo:
    "How we helped a fast-growing women’s footwear startup to structure their growth",
  approachFindings() {
    return (
      <>
        <div className="text-center pb-14">
          <Heading>Approach and Findings</Heading>
        </div>
        {/* items-start md:grid-cols-3 divide-x-2 divide-black divide-dashed */}
        <div className=" grid gap-8">
          <div className="mx-auto  space-y-3">
            <div
              className="font-bold font-AltoneBold text-xl md:text-2xl 
              "
            >
              <span className="title-underline">
                Zeroing upon the problem statement
              </span>
            </div>
            <p className="text-justify">
              {
                "We went through a series of interactions with the management team in identifying the various bottlenecks and challenges where they were getting dragged and were spending time that should have got utilized for business growth and expansion."
              }
            </p>
          </div>
          <div className=" mx-auto space-y-3">
            <div className="font-bold font-AltoneBold text-xl md:text-2xl">
              <span className="title-underline">
                Bucketing of problems/challenges
              </span>
            </div>
            <p className="text-justify">
              {
                "We bucketed the issues as Strategic, Operational and People related and bifurcated them as issues that impact growth and issues that have arisen due to lack of structure and capability development."
              }
            </p>
          </div>
          <div className=" mx-auto space-y-3 ">
            <div className="font-bold font-AltoneBold text-xl md:text-2xl">
              <span className="title-underline">
                Validation of the problem statement
              </span>
            </div>
            <p className="text-justify">
              {
                "We understood every role from the Management and their expectations from those roles post which we interacted with the manning those roles and understood their understanding of those roles and the challenges faced by them. This gave us clarity on whether the challenges were due to communication gaps, capability gaps or lack of intent from those individuals."
              }
            </p>
          </div>
        </div>
      </>
    );
  },
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Once we had the clarity we started working on challenges and issues that could be solved through Communication, Processes and Development of the team. We also created a structured Business Plan mapped to the Manpower Plan (helping the founders have clarity of when to hire which role along with Salary Benchmarking and role requirements)."
          }
        </p>
      </div>
    );
  },
  workDoneList() {
    return (
      <>
        <h4 className="text-center pb-8 font-bold text-xl md:text-3xl">
          We delivered the following during the project.
        </h4>
        <ul className="flex flex-col gap-10 overflow-hidden">
          {deliveredList.map((delItem, idx) => (
            <div className="relative w-full" key={delItem}>
              {/* Sketch Arrows For Smaller Screens */}
              {idx < deliveredList.length - 1 && (
                <Arrow1 className="md:hidden h-12 w-10 absolute bottom-0 right-0 -mb-11" />
              )}
              <li
                data-aos-duration="2000"
                data-aos={idx % 2 ? "fade-left" : "fade-right"}
                className={clsx(
                  " md:flex md:flex-row md:items-center md:gap-4 relative",
                  idx % 2 ? "md:pl-40 lg:pl-96" : "md:pr-40 lg:pr-96"
                )}
              >
                {/* Sketch Arrows for MD+ */}
                {idx < deliveredList.length - 1 && (
                  <Arrow1
                    className={clsx(
                      "hidden md:block h-14 w-14 absolute -bottom-4 -mb-11",
                      idx % 2 ? " right-40" : "left-40 flip "
                    )}
                  />
                )}

                <span className="font-lato italic text-4xl md:text-6xl">
                  {idx + 1 + ". "}
                </span>
                {delItem}
              </li>
            </div>
          ))}
        </ul>
      </>
    );
  },
  outcome() {
    return (
      <div className="space-y-4">
        <p>
          {
            "The CAI Store has grown more than 6 times since we did the project with them in 2019-20. They introduced Heels within a few months of our recommendation and today Heels account for more than 40% of their sales. They have launched products in collaboration with Rhea Kapoor and Aashna Shroff respectively. The CAI Store launched its first retail store at the Pheonix Mall at Lower Parel, Mumbai."
          }
        </p>
      </div>
    );
  },
  framework() {
    return (
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <FrameworkCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          }
          title="Objective and Value Setting Framework"
        >
          <ul>
            <li>- Business Planning</li>
            <li>- Historic Data Analysis</li>
            <li>- Forecasting and Strategic direction</li>
          </ul>
        </FrameworkCard>
        <FrameworkCard
          icon={
            <svg
              className="h-8 w-8 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0zm-14.9 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2h39.5c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z"></path>
            </svg>
          }
          title="People Practices Framework"
        >
          <ul>
            <li>- Job Descriptions and Key Performance Indicators</li>
            <li>- Manpower Planning</li>
            <li>- Organization Structure</li>
            <li>- Salary Benchmarking</li>
          </ul>
        </FrameworkCard>
        <FrameworkCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-8 h-8 group-hover:fill-white"
            >
              <path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 101.2 150.1 40c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 261.2l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm-64 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path>
            </svg>
          }
          title="Process Improvement Framework"
        >
          <ul>
            <li>- Knowledge Management</li>
            <li>- Process Documentation</li>
            <li>- Process Improvements</li>
            <li>- Process Training</li>
            <li>- Checklists and Process Flow</li>
          </ul>
        </FrameworkCard>
      </div>
    );
  },
  servicesDeployed() {
    return <div>1</div>;
  },
  testimonials: [
    {
      by: "Aradhana Minalwala",
      img: Aradh,
      designation: "Partner",
      content:
        "Debox is very methodical in their ways. They not only understand the needs of the company but they take time and effort to speak to each employee and understand their needs and incorporate it within the `work `structure. Their re-structuring has already sorted our company in so many ways which has helped our business grow only because we have gotten structured so fast. They are the key solution to all problems and take care of each and every problem from start to finish!",
    },
  ],
  refLinks: [
    "https://yourstory.com/smbstory/indian-shoemaker-brand-coronavirus-impact-footwear-industry/amp",
  ],
};

export default cai;
