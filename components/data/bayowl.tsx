import clsx from "clsx";
import logo from "../../public/studies/BayOwl/logo.png";
import HeroBanner from "../../public/studies/BayOwl/Hero_Banner.jpg";
import SideImg1 from "../../public/studies/BayOwl/Side1.jpg";
import SideImg2 from "../../public/studies/BayOwl/Side2.jpg";
// import Testimonial1 from "../../public/studies/CAI/Aradh.png";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ProcessFramework from "../reusable/icons/ProcessFramework";
import PerformanceFramework from "../reusable/icons/PerformanceFramework";
import DigitalFramework from "../reusable/icons/DigitalFramework";

import FrameworkCard from "../reusable/FrameworkCard";

const frameworkList = [
  {
    title: "Process Improvement Framework",
    icon: () => <ProcessFramework />,
    content() {
      return (
        <ul>
          <li>- User Journey and Experience Benchmarking</li>
          <li>- Business Flow and User Journey Mapping</li>
          <li>- Process Improvements and value add</li>
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
          <li>- Custom-developed platform</li>
          <li>- Complete offline to online service fulfilment</li>
          <li>- End-to-end digital tracking</li>
          <li>- Negligible human interaction</li>
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
  " We worked on redesigning the website completely, the focus was to reflect the vibe of the music industry and make it look richer and classy. ",
  " We built a front-end user workflow that was simple and engaging. We took the users to the Online Services page, once the user had created an account adding services was a click away. We created a Dashboard from where the users could initiate a project, upload files and track the project's status.",
  " Meanwhile we worked on building a code structure and nesting on an Excel sheet and explored various ways in which the code structure design and updating can be done easily.",
  "We built the backend code in a way where the entire service structure (78 services which were categorized into 2 main categories, 6 subcategories, 16 service types, 30 sub-services that had more than 30 variables) can be uploaded through a CSV/File and can be updated in a single click.",
  "We developed a backend admin panel through which the Management can track and assign, reassign and monitor the team's work.",
  "We developed a backend panel for managers to track and assign, reassign, monitor, approve and reject work done by the team.",
  "We developed a backend panel for the engineers (team) to track services assigned to them, reupload the files worked, receive feedback from Manager and Customers and upload the final project files once project is completed.",
];

const bayowl = {
  client: "Bay Owl Studios",
  logo: logo,
  heroBanner: HeroBanner,
  side1: SideImg1,
  break1: "bayowl-breakImg-1",
  break2: "bayowl-breakImg-2",
  side2: SideImg2,
  headTitle: "Helping Bayowl with an online platform - Debox Consulting",
  slug: "helping-bayowl-build-an-online-studio-service-platform",
  route: `/case-studies/helping-bayowl-build-an-online-studio-service-platform`,
  title:
    "Check how we helped a offline music studio build India's first Online Studio service platform.",
  industry: "Music",
  tags: ["Tech"],
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Bay Owl Studios is a an ultra-modern and contemporary commercial recording and post production audio facility. "
          }
        </p>
        <p>
          {
            " The CAI Store has served more than 2,00,000 happy customers to date and has grown sixfold since March 2020."
          }
        </p>
        <p>
          Website:{" "}
          <a href="https://www.bayowlstudios.com/">
            https://www.bayowlstudios.com/
          </a>
        </p>
      </div>
    );
  },
  problem:
    "The Founder (Varun Parikh) wanted to redesign the website with a fresh new look that is more creative and immersive with their target audience (singers and musicians). Along with the website, the requirement was to build India's first Online Studio service platform.",
  timeline: "July 2022 - September 2022",
  projInfo:
    "Check how we helped a offline music studio build India's first Online Studio service platform.",
  approachList: [
    {
      title: "Defining the project scope",
      description:
        "We understood the business and service flow and how offline services can be engineered for Online fulfilment and what limitations or challenges can occur in the online services.",
    },
    {
      title: "Service Listing and Structuring",
      description:
        "The services structure was extremely complex as there are more than 78 services that were categorized into 2 main categories, 6 subcategories, 16 service types, 30 sub-services that had more than 30 variables. ",
    },
    {
      title: "Building a Sustainable Code Structure",
      description:
        "We had to build a sustainable and simpler code structure that can be updated easily in the future.",
    },
    {
      title: "Cloud Management and Complexity",
      description:
        "The online services required the uploading and downloading of multiple files (up to 60 at a time) each ranging on an average of 100-200 MBs. There were a lot of challenges in managing such vast data as it was to be managed at multiple stages of the service journey at the local user level, cloud and at engineer level.",
    },
    {
      title: "Backend Management",
      description:
        "We had to build a backend management platform to assign the Online Services to different team members, team members will be working on these services and reupload the engineered files for customer review and the process involved a few of rounds of back and forth.",
    },
    {
      title: "Customer Portal",
      description:
        "We had to build a Customer Portal from where the customer will be able to add services, initiate services, upload their files, track service fulfillment.",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "We created the workflows to understand the overall journey of the users and identified areas where we needed to add system checkpoints, build smart logic and customized views to share information, and pass information between the backend and frontend."
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
              How we delivered the project:
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
  // testimonials: [
  //   {
  //     by: "Ritika Gupta",
  //     img: TestimonialImg,
  //     designation: "Director",
  //     content:
  //       "We had the privilege to work with Debox at Kalki they really helped us structure all our reports and also give a defined checklist and tasks for every team. Because of that, we can now quantify the work done in every department it has really helped us in improving our efficiency and productivity. They took tremendous effort in understanding how our business works and customize reports and requirements as per our needs.",
  //   },
  // ],
  // refLinks: [
  //   "https://yourstory.com/smbstory/indian-shoemaker-brand-coronavirus-impact-footwear-industry/amp",
  // ],
};

export default bayowl;
