import clsx from "clsx";
import logo from "../../public/Logo/12.webp";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ObjectiveFramework from "../reusable/icons/ObjectiveFramework";
import PeopleFramework from "../reusable/icons/PeopleFramework";
import ProcessFramework from "../reusable/icons/ProcessFramework";
import DigitalFramework from "../reusable/icons/DigitalFramework";
import PerformanceFramework from "../reusable/icons/PerformanceFramework";

import FrameworkCard from "../reusable/FrameworkCard";

const frameworkList = [
  {
    title: "Objective and Value Setting Framework",
    icon: () => <ObjectiveFramework />,
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
    icon: () => <PeopleFramework />,
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
    icon: () => <ProcessFramework />,
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
    icon: () => <DigitalFramework />,
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
    icon: () => <PerformanceFramework />,
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
  heroBanner:
    "https://res.cloudinary.com/debox/image/upload/v1666336189/Debox-New/studies/Kalki/Hero_Banner_kxglnk.webp",
  side1:
    "https://res.cloudinary.com/debox/image/upload/v1666336188/Debox-New/studies/Kalki/Side1_bpr3a3.webp",
  break1: "kalki-breakImg-1",
  break2: "kalki-breakImg-2",
  side2:
    "https://res.cloudinary.com/debox/image/upload/v1666336187/Debox-New/studies/Kalki/Side2_e4gbas.webp",
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
            "Born in Mumbai, India in 2007, KALKI evokes the very spirit of the city it was founded in. An upstart, innovative, and dynamic brand – KALKI – offers the best of contemporary, ethnic Indian fashion and fusion-wear styles. Staying true to the brand’s unique promise of premium and wearable fashion, KALKI unveils fresh collections and all-new designs throughout the fashion calendar. "
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
      title: "Zeroing upon the challenges and opportunity statement",
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
            "Kalki Fashion has established itself as one of the leading brands when it comes to Bridal Wear and Indian Ethnic Wear."
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
      img: "https://res.cloudinary.com/debox/image/upload/v1666336187/Debox-New/studies/Kalki/Testimonial_gobnpf.webp",
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
