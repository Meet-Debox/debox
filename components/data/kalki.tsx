import clsx from "clsx";
import logo from "../../public/Logo/12.jpg";
import HeroBanner from "../../public/studies/Kalki/Hero_Banner.jpeg";
import SideImg2 from "../../public/studies/Kalki/Side2.png";
import SideImg1 from "../../public/studies/Kalki/Side1.png";
import Testimonial1 from "../../public/studies/Kalki/Testimonial.png";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ObjectiveFramework from "../reusable/icons/ObjectiveFramework";
import PeopleFramework from "../reusable/icons/PeopleFramework";
import ProcessFramework from "../reusable/icons/ProcessFramework";

import FrameworkCard from "../reusable/FrameworkCard";

const frameworkList = [
  {
    title: "Objective and Value Setting Framework",
    icon() {
      return (
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
      );
    },
    content() {
      return (
        <ul>
          <li>- Mission, Vision and Values</li>
          <li>- Competitor Benchmarking</li>
        </ul>
      );
    },
  },
  {
    title: "People Practices Framework",
    icon() {
      return (
        <svg
          className="h-8 w-8 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0zm-14.9 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2h39.5c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z"></path>
        </svg>
      );
    },
    content() {
      return (
        <ul>
          <li>- Job Descriptions and Key Performance Indicators</li>
          <li>- Organization Structure</li>
          <li>- Policy Redesign</li>
          <li>- Employee Handbook</li>
          <li>- Incentive / Reward Plan</li>
        </ul>
      );
    },
  },
  {
    title: "Process Improvement Framework",
    icon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-8 h-8 group-hover:fill-white"
        >
          <path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 101.2 150.1 40c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 261.2l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm-64 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path>
        </svg>
      );
    },
    content() {
      return (
        <ul>
          <li>- Knowledge Management</li>
          <li>- Process Documentation</li>
          <li>- Process Improvements</li>
          <li>- Process Training</li>
          <li>- Checklists and Process Flow</li>
          <li>- Data Trackers</li>
          <li>- Store Dashboards</li>
          <li>- Department Dashboards</li>
          <li>- Daily Morning Huddles</li>
          <li>- Customer Journey / Experience</li>
        </ul>
      );
    },
  },
  {
    title: "Digital Transformation Framework",
    icon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-8 h-8 group-hover:fill-white"
        >
          <path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 101.2 150.1 40c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 261.2l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm-64 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path>
        </svg>
      );
    },
    content() {
      return (
        <ul>
          <li>- Google Trackers</li>
          <li>- Automation on Google</li>
        </ul>
      );
    },
  },
  {
    title: "Performance and Sustainability Framework",
    icon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-8 h-8 group-hover:fill-white"
        >
          <path d="M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 101.2 150.1 40c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L95 261.2l55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm-64 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path>
        </svg>
      );
    },
    content() {
      return (
        <ul>
          <li>- Data Trackers (Individual and team)</li>
          <li>- Dashboards (Functional, Stores and Business)</li>
        </ul>
      );
    },
  },
];

const deliveredList = [
  "We worked with the Management in defining the organization's Mission, Vision and Values, this helped in building a solid foundation for driving change, bringing people together in achieving a common goal",
  "We created detailed Job Descriptions for all roles along with Key Performance Indicators and Data Trackers and explained them to all individuals",
  "We created checklists, processes and workflows and trained every individual to drive it to success",
  "We created Dashboards (Daily/Weekly/Fortnight/Monthly) for each Store, Department, Processes that focused on driving business objectives and performance",
  "We reworked on the HR/People practices and policies and created an Employee Handbook and communicated the same across the organization",
  "We created an incentive/reward program for the Sales team to drive business along with rewarding performers",
  "We started daily huddle meetings across all stores and across departments to review the wins and lost opportunities on daily basis. These huddle meetings were lead by different individuals every day, thus developing every individual.",
  "We suggested changes in the Customer Journey / Touchpoints at the stores that can have a negative impact",
];

const keyFindings = [
  "There was a huge gap in Management's expectations versus the understanding of the teams of what was expected of them",
  "There was no documentation or knowledge management",
  "There was limited data tracking and there was no focus on performance improvements due to the lack of data tracking/availability",
  "The team lacked knowledge of what was happening outside in the Retail and Fashion industry and were stuck in doing the same thing for years.",
];

const kalki = {
  client: "Kalki",
  headTitle: "Helping Kalki Scale - Debox Consulting",
  logo: logo,
  heroBanner: HeroBanner,
  side1: SideImg1,
  break1: "kalki-breakImg-1",
  break2: "kalki-breakImg-2",
  side2: SideImg2,
  slug: "helping-kalki-scale",
  route: `/case-studies/helping-kalki-scale`,
  title:
    "How we helped a fast-growing women's fashion brand to scale to newer heights by designing a Performance Management process along with data trackers and dashboards",

  industry: "Fashion",
  tags: [],
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Born in Mumbai, India in 2007, KALKI evokes the very spirit of the city it was founded in. An upstart, innovative, and dynamic brand – KALKI – offers the best of contemporary, ethnic Indian fashion and fusion-wear styles. Staying true to the brand’s unique promise of premium and wearable fashion, KALKI unveils fresh collections and all-new designs throughout the fashion calendar."
          }
        </p>
        <p>
          Website:{" "}
          <a href="http://www.kalkifashion.com/">
            http://www.kalkifashion.com/
          </a>
        </p>
      </div>
    );
  },
  problem:
    "The management team (Saurabh Gupta, Shishir Gupta and Nishit Gupta) at Kalki were super poised for taking its brand further and wanted to structure its internal systems and process to drive employee productivity, operational efficiency along with focused data tracking and improvements across the organization.",
  timeline: "June 2018 - April 2019 | April 2022 - June 2022",
  projInfo:
    "How we helped a fast-growing women's fashion brand to scale to newer heights by designing a Performance Management process along with data trackers and dashboards",
  approachList: [
    {
      title: "Zeroing upon the problem statement",
      description:
        "We had detailed sessions with each stakeholder of the management team to understand the need for this exercise and what according to them are the challenges that they want to be addressed at the end of the project",
    },
    {
      title: "Team interactions to identify areas of improvement",
      description:
        "We had interactions with every unique role in the organization and understood their roles and deep-dived into the challenges faced by them and what according to them can be done better",
    },
    {
      title: "Data gathering and analysis",
      description:
        "We started seeking and analyzing data and understood there was limited to no data and most of the work was done basis historic experience or individuals' gut feelings",
    },
    {
      title: "Roadmap planning",
      description:
        "We re-sat with Management and mapped out where they envision themselves in the next 2-3 years and build the entire project strategy to achieve the outcome",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Post the interactions with Management and the team, we had clarity on the issues/challenges and bottlenecks within the organization that can stall or impact the growth plans of the Management."
          }
        </p>
      </div>
    );
  },
  workDoneList() {
    return (
      <div className="">
        <div className="">
          <div className="max-w-5xl mx-auto cont -mt-8 w-10/12">
            <h4 className="text-center pb-8 font-bold text-xl md:text-3xl">
              Below are the key findings:
            </h4>

            <ul className="flex flex-col gap-10 overflow-hidden mb-8 ">
              {keyFindings.map((delItem, idx) => (
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
          </div>
        </div>

        <div className="max-w-5xl mx-auto cont -mt-8 w-10/12">
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
        </div>
      </div>
    );
  },
  outcome() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Kalki Fashion has established itself as one of the leading brands when it comes to Bridal Wear and Indian Ethnic Wear. "
          }
        </p>
        <p>
          {
            "Leading celebrities like Kriti Sanon, Yami Gautam, Disha Patani,  Malaika Arora, Aditi Rao Hydari, Pooja Hegde, Vaani Kapoor and Tara Sutaria have walked the ramp for their collection launch at 'The Bombay Times Fashion Week.'"
          }
        </p>
        <p>{"Kalki Fashion also launched a grand store in Delhi in 2022."}</p>
      </div>
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
      by: "Ritika Gupta",
      img: Testimonial1,
      designation: "Director",
      content:
        "We had the privilege to work with Debox at Kalki they really helped us structure all our reports and also give a defined checklist and tasks for every team. Because of that, we can now quantify the work done in every department it has really helped us in improving our efficiency and productivity. They took tremendous effort in understanding how our business works and customize reports and requirements as per our needs.",
    },
  ],
  refLinks: [
    "https://yourstory.com/smbstory/indian-shoemaker-brand-coronavirus-impact-footwear-industry/amp",
  ],
};

export default kalki;
