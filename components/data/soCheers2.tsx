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
  "Created parity at a skill level to map the outcome of various skills required in the service/department to compare efficiency of different team members having different skill sets at the same level.",
  "Set internal billing rates for services based on the value of services to create standardisation across different clients and teams.",
  "Initiated a process to collect data of work done by each team member.",
  "Automated the efficiency comparison at a cluster and team level based on the data collected. ",
  "The data would also compare the internal billing with the team costs and highlight the profitability at a cluster & team level.",
  "Mapped internal billing to client billing to understand client level profitability and to compare scope of work planned v/s actuals to improve monetisation for additional deliveries.",
];

const soCheers2 = {
  client: "SoCheers",
  headTitle:
    "How Debox helped a fast-growing Digital Media dervive profitability and outputs.",
  logo: "https://res.cloudinary.com/debox/image/upload/v1666336193/Debox-New/Logo/30_ao1muj.webp",
  heroBanner:
    "https://res.cloudinary.com/debox/image/upload/v1673157923/Debox%20/studies/SoCheers%20-%202%20-%20Profitability%2C%20Outputs/awards_bro6hx.webp",
  side1:
    "https://res.cloudinary.com/debox/image/upload/v1672584788/Debox%20/studies/SoCheers%20-%201%20-%20Culture%2C%20People%20Practices/about_common_xeioat.webp",
  break1: "so-cheers-1",
  break2: "so-cheers-2",
  side2:
    "https://res.cloudinary.com/debox/image/upload/v1673158107/Debox%20/studies/SoCheers%20-%202%20-%20Profitability%2C%20Outputs/profitability-projectinfo_y9iwfc.webp",
  slug: "helping-socheers-derive-profitability-and-outputs",
  route: `/case-studies/helping-socheers-derive-profitability-and-outputs`,
  title:
    "How we helped a fast-growing Digital Media agency derive profitability per team, project and service",

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
    "HR managers spend hundreds of hours in the Performance Review processes every year and a lot of this time goes into unproductive coordination and follow-ups. The company was exploring HR platforms and tools to drive Performance Management and Reviews but were not able to find a suitable one that can customise the platform to suit their needs and future requirements.",
  timeline: "October 2019 - Present",
  projInfo:
    "How we helped a fast-growing Digital Media agency derive profitability per team, per project and per service/output",
  approachList: [
    {
      title: "Team interactions to identify areas of improvement",
      description:
        " Based on our interactions with team leaders and management, we identified that the team leaders were not aware of their contribtuion to billing and there was no way to identify billing for various services into a bundled service. The management studied profitability at an overall level and team / client level profitability was not mapped & tracked.",
    },
    {
      title: " Zeroing upon the opportunity statement",
      description:
        "Understanding team level billing, profitability and efficiency was critical to scale the business and the accumen had to be developed at team level. It was also important to clearly identify efficiency at a team and individual level to drive profitability and scale sustainably.",
    },
    {
      title: "Roadmap planning",
      description:
        "We discussed the opportunity with the Management and mapped out where they envision themselves in the next 2-3 years. We created a plan to develop business accumen and financial understanding for team leaders.",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Our approach was to build a self-serving central platform which is used across levels to manage the entire review cycle and also give data as needed to different user sets. "
          }
        </p>
        <p>{"Our platform could - "}</p>
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
            "SoCheers has been able to efficiently and profitably grow the team sizes to upto 90 people from the earlier average of 15 people. Most of their team members are profitable within the first 90 days of joining and managers are able to clearly identify and fix efficiency gaps. They were able to solve for efficiency gaps with structured feedback mechanisms and deeply integrated performance management system."
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

export default soCheers2;
