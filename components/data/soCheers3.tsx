import logo from "../../public/Logo/14.webp";
import Arrow1 from "../reusable/icons/Arrow1";
import clsx from "clsx";
// Icons
import FrameworkCard from "../reusable/FrameworkCard";
import DigitalFramework from "../reusable/icons/DigitalFramework";

const frameworkList = [
  {
    title: "Digital Transformation Framework",
    icon: () => <DigitalFramework />,
    content() {
      return (
        <ul>
          <li>- Custom Tech Platforms</li>
          <li>- Process Digitization</li>
        </ul>
      );
    },
  },
];
const workDone = [
  "Allow the reviewee to self submit the performance data based on the review cycle set. This data can be verified / edited by the manager and the manager could add his feedback on the performance at a KPI or overall level.",
  "Once a review is updated by the manager, the manager's manager can approve the review. Anyone other than the reviewee, manager and manager's manager cannot change or approve the data.",
  "The HR team can start and stop the review cycle and also control the employees who will be able to participate in the cycle based on their joining / exit date.",
  "The HR team can also track the status of reviews for each employee and send follow-up emails from the portal itself without having to move to any other platform.",
  "Each user set viz. employee, manager, manager's manager, HR and management have their respective dashboard to showcase relevant insights. The data can be further filtered for a particular review period to quickly understand a snapshot of the performance.",
];

const soCheers3 = {
  client: "SoCheers",
  headTitle:
    "How Debox helped a fast-growing Digital Media manage performance reviews.",
  logo: "https://res.cloudinary.com/debox/image/upload/v1666336193/Debox-New/Logo/30_ao1muj.webp",
  heroBanner:
    "https://res.cloudinary.com/debox/image/upload/v1673158754/Debox%20/studies/SoCheers%20-%203%20-%20Performance%20Reviews/perf-hero_vi2bco.webp",
  side1:
    "https://res.cloudinary.com/debox/image/upload/v1672584788/Debox%20/studies/SoCheers%20-%201%20-%20Culture%2C%20People%20Practices/about_common_xeioat.webp",
  break1: "so-cheers-1",
  break2: "so-cheers-c3-2",
  side2:
    "https://res.cloudinary.com/debox/image/upload/v1673159898/Debox%20/studies/SoCheers%20-%203%20-%20Performance%20Reviews/Screenshot_20230108_120729_krvqni.png",
  slug: "helping-socheers-automate-performance-reviews",
  route: `/case-studies/helping-socheers-automate-performance-reviews`,
  title:
    "How we helped a fast-growing Digital Media manage performance reviews effeciently by designing a custom review platform to suit their needs.",

  industry: "Marketing",
  tags: ["Tech"],
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "SoCheers Infotech is a fast-growing full-service digital media agency based out of Mumbai and Bangalore. SoCheers provides digital marketing services to brands that don't just include digital presence but immersive experiences too."
          }
        </p>
        <p>
          {
            "From heart-touching DVCs to catchy jingles, and interactive microsites to engaging content, they have done it all."
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
    "How we helped a fast-growing Digital Media manage performance reviews effeciently by designing a custom review platform to suit their needs.",
  approachList: [
    {
      title: "Team interactions to identify areas of improvement",
      description:
        "With the growing team size the HR team had to invest more and more time in managing the performance review cycles. A lot of time was spent across different teams on redundant tasks such as collating review feedback and ratings in an excel sheet for analysis, referring to past data during review sessions, email followups for reviews, sharing draft KPI sheets, etc.",
    },
    {
      title: " Zeroing upon the opportunity statement",
      description:
        "The team needed a tech solution to help them automate the collection of performance data for each KPI, calculate the ratings, and store feedback.",
    },
    {
      title: "Roadmap planning",
      description:
        "Based on the requirement, we suggested a custom built tool on Zoho Ecosystem to ensure the data entry, reporting and dashboards are customised to suit the requirements of the company. This system can be further scaled to create all HR related tools on a single portal except for the attendance monitoring system.",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Our approach was to build a self-serving central platform which is used across levels to manage the entire review cycle and also give data as needed to different user sets."
          }
        </p>
        <p>{"Our platform could -"}</p>
      </div>
    );
  },
  workDoneList() {
    return (
      <div className="">
        <div className="">
          <div className="max-w-5xl mx-auto cont -mt-8 w-10/12">
            <h4 className="text-center pb-8 font-bold text-xl md:text-3xl">
              Our platform could -
            </h4>

            <ul className="flex flex-col gap-10 overflow-hidden mb-8 ">
              {workDone.map((delItem: any, idx: number) => (
                <div className="relative w-full" key={delItem}>
                  {/* Sketch Arrows For Smaller Screens */}
                  {idx < workDone.length - 1 && (
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
                    {idx < workDone.length - 1 && (
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
            "The HR team could save 100+ hours in every review cycle in followup, data consolidation, follow-ups and managing reviews. Other team heads could save 45+ hours for each review cycle spent usually on data consolidation for the team, referring to past data, managing different excel sheets and emailing feedback to team members. The team size at SoCheers has grown 2x since then and the savings in efforts and time have only increased since then."
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
};

export default soCheers3;
