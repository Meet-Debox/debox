import clsx from "clsx";

// assets
import main1 from "../../public/culture.jpg";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ProcessFramework from "../reusable/icons/ProcessFramework";

import DigitalFramework from "../reusable/icons/DigitalFramework";

import FrameworkCard from "../reusable/FrameworkCard";
import PeopleFramework from "../reusable/icons/PeopleFramework";
import PerformanceFramework from "../reusable/icons/PerformanceFramework";
import main from ".";

const frameworkList = [
  {
    title: "People Practices Framework",
    icon: () => <PeopleFramework />,
    content() {
      return (
        <ul>
          <li>- Key Performance Indicators & Goal Setting</li>
          <li>- Appraisals & Reviews</li>
          <li>- Gamified Induction</li>
          <li>- Individual Development Plans</li>
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
          <li>- Process Setting & Documentation</li>
          <li>- Process Training</li>
          <li>- Data Trackers</li>
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
    title: "Performance & Sustainability Framework",
    icon: () => <PerformanceFramework />,
    content() {
      return (
        <ul>
          <li>- Data Trackers (Individual and team)</li>
          <li>- Dashboards (Team)</li>
        </ul>
      );
    },
  },
];

const keyFindings = [
  "Key performance indicators, measurement criteria, rating levels for each unique role in the company.",
  "Data trackers, input forms and automated reports to have supporting information for each metric.",
  "Subjective assessment parameters common across a role or departments. ",
  "Communicated the KPIs, trackers, subjective assessment parameters to the entire team to ensure that everyone has understood their KPIs and how it is going to help them improve their work",
  "Ensured that the trackers and subjective assessments are done as per the set timelines",
  "Conducted structured reviews where we helped the managers identify the feedback pointers so that the feedback is communicated in a constructive manner with clear action pointers across different roles.",
  "Parallely worked on improving business accumen of team heads to help them understand profitability for a team, cluster, client and service.",
  "Identified team members who needed to be put on development and improvement programs, created a structured 3-6 month program customised to suit each team member based on their strengths and weaknesses. Rolled out the programme and saw it through.",
  "Designed a gamified induction plan to have faster ice-breakers with the team to help the new joiner reach their full potential much sooner.",
];

const soCheers1 = {
  client: "SoCheers",
  logo: "https://res.cloudinary.com/debox/image/upload/v1666336193/Debox-New/Logo/30_ao1muj.webp",
  heroBanner:
    "https://res.cloudinary.com/debox/image/upload/v1673015318/Debox%20/studies/SoCheers%20-%201%20-%20Culture%2C%20People%20Practices/preview_oe2qoz.webp",
  // about
  side1:
    "https://res.cloudinary.com/debox/image/upload/v1672584788/Debox%20/studies/SoCheers%20-%201%20-%20Culture%2C%20People%20Practices/about_common_xeioat.webp",
  break1: "so-cheers-1",
  break2: "so-cheers-2",
  // timeline / title
  side2:
    "https://res.cloudinary.com/debox/image/upload/v1672585716/Debox%20/studies/SoCheers%20-%201%20-%20Culture%2C%20People%20Practices/1659977114870_zdvbnx_qgmd1o.webp",
  headTitle: "Helping SoCheers build a thriving culture - Debox Consulting",
  slug: "helping-socheers-build-culture",
  route: `/case-studies/helping-socheers-build-culture`,
  title:
    "How we helped a fast-growing Digital Media agency to build a thriving Culture by designing People Practices to drive productivity and team development",
  industry: "Marketing",
  tags: ["Tech"],
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "SoCheers Infotech is a fast-growing full-service digital media agency based out of Mumbai and Bangalore. SoCheers provides digital marketing services to brands that don't just include digital presence but immersive experiences too. From heart-touching DVCs to catchy jingles, and interactive microsites to engaging content, they have done it all."
          }
        </p>
        <p>
          Website: <a href="https://socheers.net/">https://socheers.net/</a>
        </p>
      </div>
    );
  },
  problem:
    "Being part of a fast-growing industry, the management team (Rajni Daswani, Mehul Gupta and Siddharth Devnani) wanted to build strong People practices that would help drive retention, development and growth of their people.",
  timeline: "October 2019 - Present",
  projInfo:
    "How we helped a fast-growing Digital Media agency to build a thriving Culture by designing People Practices to drive productivity and team development",
  approachList: [
    {
      title: "Team interactions to identify areas of improvement",
      description:
        "We had interactions with every unique role in the organization to understand their current roles, challenges and areas for improvement in process. This led to identification of opportunities for setting processes, improving efficiency, role expansion and role clarity.",
    },
    {
      title: " Zeroing in on the Problem Statement",
      description:
        "During the process, we understood that the root cause of the problem was that as most of the managers were first time managers, homegrown and young. We also came across a very interesting challenge - how to assess the subjective areas of a role in a structured and consistent manner.",
    },
    {
      title: "Roadmap planning",
      description:
        "Based on the findings and possible solutions, we suggested the roadmap that best suits the management's vision for the business and culture, where they wanted their team leaders to be effective leaders, undersand the business metrics and create a strong team which promotes a learning and high growth.",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Once we had an agreement on the roadmap clarity we started working on a new performance management system which is simpler and effective. Our approach was to have lead indicators for mid-management & junior roles and a combination of lead and lag indicators for the team leaders and management to ensure we have a good focus on both efforts and outcome at a business level. We also wanted to address the most critical issue of setting KPIs in a Digital Agency which is setting a systematic approach on reviewing subjective areas of a role (like design, content writing, etc.)"
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
            <h5 className="text-center pb-8 font-bold text-xl md:text-3xl">
              {" We delivered the following during the project:"}
            </h5>

            <ul className="flex flex-col gap-10 overflow-hidden mb-8 ">
              {keyFindings.map((delItem: any, idx: number) => (
                <div className="relative w-full" key={delItem}>
                  {/* Sketch Arrows For Smaller Screens */}
                  {idx < keyFindings.length - 1 && (
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
                    {idx < keyFindings.length - 1 && (
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
      </div>
    );
  },
  outcome() {
    return (
      <div className="space-y-4">
        <p>
          {
            "We designed, developed and delivered India's 1st of its kind Online Music Studio services."
          }
        </p>
        <p>
          {
            "SoCheers has grown 3 times in employee strength over the last 3 years and 95% of the team leaders are retained. The team leaders are leading teams of upto 90 employees (earlier average of 15 employees). On an average a person who joins SoCheers has been promoted atleast twice within the 3 year timeframe."
          }
        </p>
        <p>
          {
            " They work with brands like Amazon Prime Video, Neemans, Mahindra, Cipla, Lupin, Nick, MX Player, Bosch, Jaguar, Deltin Group, Amazon Prime Music, Triggo, etc."
          }
        </p>
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
  //   testimonials: [
  //     {
  //       by: "Varun Parikh",
  //       img: "https://res.cloudinary.com/debox/image/upload/v1666336184/Debox-New/studies/BayOwl/Testimonial_itnvep.webp",
  //       designation: "Owner",
  //       content:
  //         "One of the best decisions we've made at Bay Owl Studios was going with Debox. We've been looking to expand into unknown territory with the studio, and have often been difficult with our asks of them. Darshan and his team have been fantastic throughout and have delivered a product that we're not only most excited to launch, but also develop further with Debox. Will definitely be recommending them to anybody that has any web or software requirement.",
  //     },
  //   ],
};

export default soCheers1;
