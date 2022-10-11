import clsx from "clsx";
import CAILogo from "../../public/Logo/05.jpg";
import HeroBanner from "../../public/studies/CAI/Hero_Banner.png";
import SideImg1 from "../../public/studies/CAI/Side1.png";
import SideImg2 from "../../public/studies/CAI/Side2.png";
import Testimonial1 from "../../public/studies/CAI/Aradh.png";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ObjectiveFramework from "../reusable/icons/ObjectiveFramework";
import PeopleFramework from "../reusable/icons/PeopleFramework";
import ProcessFramework from "../reusable/icons/ProcessFramework";

import FrameworkCard from "../reusable/FrameworkCard";

const frameworkList = [
  {
    title: "Objective and Value Setting Framework",
    icon: () => <ObjectiveFramework />,
    content() {
      return (
        <ul>
          <li>- Business Planning</li>
          <li>- Historic Data Analysis</li>
          <li>- Forecasting and Strategic direction</li>
        </ul>
      );
    },
  },
  {
    title: "People Practices Framework",
    icon: () => <PeopleFramework />,
    content() {
      return (
        <ul>
          <li>- Job Descriptions and Key Performance Indicators</li>
          <li>- Manpower Planning</li>
          <li>- Organization Structure</li>
          <li>- Salary Benchmarking</li>
        </ul>
      );
    },
  },
  {
    title: "Process Improvement Framework",
    icon: () => <ProcessFramework />,
    content() {
      return (
        <ul>
          <li>- Knowledge Management</li>
          <li>- Process Documentation</li>
          <li>- Process Improvements</li>
          <li>- Process Training</li>
          <li>- Checklists and Process Flow</li>
        </ul>
      );
    },
  },
];

const deliveredList = [
  "Detailed Job Descriptions for all roles (current and near-future basis of the Business and Manpower plan)",
  "Documented existing processes and re-engineered them to bring more efficiency and automated processes that were critical to ensuring mistake proofing",
  "Created checklists and process flows to provide people more clarity and minimize mistakes and rework",
  "Communicated the Job Descriptions and Processes to all individuals and explained how these are going to help them improve their work and output and incorporated their inputs",
  "Analysed business data and created an 18-month business plan along with a growth-mapped Manpower Planning",
  "We recommended management to focus on building more best sellers and diversify into other categories like Heels",
];

const cai = {
  client: "CAI Store",
  headTitle: "Helping Cai Structure their Growth - Debox Consulting",
  logo: CAILogo,
  heroBanner: HeroBanner,
  side1: SideImg1,
  break1: "cai-breakImg-1",
  break2: "cai-breakImg-2",
  side2: SideImg2,

  slug: "helping-cai-structure-their-growth",
  route: `/case-studies/helping-cai-structure-their-growth`,
  title:
    "Check how we helped a fast-growing women's footwear startup to structure their growth.",
  industry: "Fashion",
  tags: [],
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
            " The CAI Store has served more than 2,00,000 happy customers to date and has grown sixfold since March 2020."
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
  approachList: [
    {
      title: "Zeroing upon the problem statement",
      description:
        "We went through a series of interactions with the management team in identifying the various bottlenecks and challenges where they were getting dragged and were spending time that could have been spent on business growth and expansion.",
    },
    {
      title: "Bucketing of problems/challenges:",
      description:
        "We bucketed the issues as Strategic, Operational and People related and bifurcated them as issues that impact growth and issues that have arisen due to lack of structure and capability development.",
    },
    {
      title: "Validation of the problem statement:",
      description:
        "We understood every role from the Management and their expectations from those roles post which we interacted with the people manning those roles and understood their understanding of those roles and the challenges faced by them. This gave us clarity on whether the challenges were due to communication gaps, capability gaps or lack of intent from those individuals.",
    },
  ],
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
                data-aos-duration="1500"
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
      <>
        <div className="space-y-4">
          <p>
            {
              "The CAI Store has grown more than 6 times since we did the project with them in 2019-20. They introduced Heels within a few months of our recommendation and today Heels account for more than 40% of their sales. They have launched products in collaboration with Rhea Kapoor and Aashna Shroff respectively. The CAI Store launched its first retail store at the Pheonix Mall at Lower Parel, Mumbai."
            }
          </p>
        </div>
      </>
    );
  },
  framework() {
    return (
      <>
        {frameworkList.map((framework) => (
          <FrameworkCard
            icon={framework.icon()}
            key={framework.title}
            title={framework.title}
          >
            {framework.content()}
          </FrameworkCard>
        ))}
      </>
    );
  },
  testimonials: [
    {
      by: "Aradhana Minalwala",
      img: Testimonial1,
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
