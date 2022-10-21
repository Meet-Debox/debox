import clsx from "clsx";
import logo from "../../public/Logo/10.webp";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ObjectiveFramework from "../reusable/icons/ObjectiveFramework";
import PeopleFramework from "../reusable/icons/PeopleFramework";
import ProcessFramework from "../reusable/icons/ProcessFramework";
import PerformanceFramework from "../reusable/icons/PerformanceFramework";

import FrameworkCard from "../reusable/FrameworkCard";

const keyFindings = [
  "There was no store-wise P&L statement to track store performance, growth or degrowth",
  "There was no tracking of Food costs store wise",
  "There was no structured tracking of Cheese consumption and the Cheese purchase was done store wise",
  "The sales were heavily dependent on 3rd parties like Swiggy, Zomato, Uber Eats and Scootsy",
  "There was no structured approach to the Annual Target setting and there was no planning done basis seasonalities and historic data",
];
const deliveredList = [
  "Annual Business Plan with store-wise annual targets, month-wise targets and P&L statement",
  " Performance Management and target setting for the entire organization linked to the Annual Business Plan",
  "Dashboards and Financial reports to create better financial controls",
  "Store-wise audits formats and checklists to improve efficiency, quality consistency, improve fill rates, improve customer experience and NPS",
  "Focused approach and plan on driving Call Centre and Website sales",
];
const frameworkList = [
  {
    title: "Objective and Value Setting Framework",
    icon: () => <ObjectiveFramework />,
    content() {
      return (
        <ul>
          <li>- Mission, Vision and Values</li>
          <li>- Annual Business Plan</li>
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
          <li>- Performance Management and Key Performance Indicators</li>
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
          <li>- Process Improvements</li>
          <li>- Checklists and Process Flow</li>
          <li>- Daily Morning Huddles</li>
          <li>- Fill Rate Improvement</li>
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
          <li>- Store Dashboards </li>
          <li>- Finance Dashboards</li>
          <li>{"- Store-wise P&L"}</li>
          <li>{"- Monthly business P&L"}</li>
        </ul>
      );
    },
  },
];

const junos = {
  client: "Juno's Pizza",
  logo: logo,
  heroBanner:
    "https://res.cloudinary.com/debox/image/upload/v1666336190/Debox-New/studies/Junos/Hero_Banner_ikqzii.webp",
  side1:
    "https://res.cloudinary.com/debox/image/upload/v1666336186/Debox-New/studies/Junos/Side1_liznu0.webp",
  break1: "junos-breakImg-1",
  break2: "junos-breakImg-2",
  side2:
    "https://res.cloudinary.com/debox/image/upload/v1666336186/Debox-New/studies/Junos/Side2_fjhl5w.webp",
  slug: "helping-junos-grow-and-drive-efficiency",
  route: `/case-studies/helping-junos-grow-and-drive-efficiency`,
  title:
    "How we helped a fast-growing pizza chain structure their growth plan and drive efficiency",

  industry: "Food",
  tags: [],
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Started in 2009 by Aditya Shah, Juno's Pizza believed in making food that everyone enjoys eating. Their products are prepared based on the secret recipe using natural, chemical-free ingredients prepared by Aditya's Grandma."
          }
        </p>
        <p>{"Juno's Pizza was acquired by Cure Foods in 2022."}</p>
      </div>
    );
  },
  problem:
    "With operations and business being well established, the founder Aditya Shah wanted to bring in efficiencies and focus on driving growth and profitability.",
  timeline: "March 2018 - November 2018",
  projInfo:
    "How we helped a fast-growing pizza chain structure their growth plan and drive efficiency",
  approachList: [
    {
      title: "Data analysis and insights",
      description:
        "We gathered the sales data for the last 18 months and deep-dived to identify the trends, store-wise sales, category-wise contribution, highest contributors, lowest contributors, internal sales contribution, 3rd party sales contribution, profitability etc.",
    },
    {
      title: "Areas of Improvement",
      description:
        "Based on the analysis and insights we identified areas of improvement and bucketed them into Process Improvements, Operational Controls, Financial Controls and Strategic Focus areas.",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "We started with creating an Annual Business Plan that covered store-wise sales, category-wise sales, store-wise profitability, business seasonalities, and internal sales to external sales ratio."
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
              Below were the key findings during the analysis and business
              planning:
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
            "With our focused approach and initiatives we delivered the following:"
          }
        </p>
        <hr />
        <ul className="space-y-4">
          <li>
            1. The sales ratio of internal sales to external sales was 40:60
            that was brought to 55:45 thus improving the bottom line
          </li>
          <li>
            2. Store-wise P&L helped in improving store-wise efficiency and
            reducing wastages and pilferage
          </li>

          <li>
            3. Brought cheese consumption within the desired norms and range
            thus improving the bottom line
          </li>

          <li>
            4. Improved the fill rate of Sides and Desserts thus improving
            Average Order Value
          </li>

          <li>
            5. Improved sales through Call Centre and Internal Delivery team
            thus improving team efficiencies and improving overall profitability
          </li>
          <hr />

          <li>
            {
              " Juno's Pizza grew by 38% YOY in 2018-19, turned positive on their Outlet Level EBITDA (13% from 0.4%) and improved the Company Level EBITDA from (-17% from -37%). Juno's Pizza was acquired by Cure Foods in 2022."
            }
          </li>
        </ul>
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
      by: "Aditya Shah",
      img: "https://res.cloudinary.com/debox/image/upload/v1666336186/Debox-New/studies/Junos/Testimonial1_l4eok9.webp",
      designation: "Partner",
      content:
        "Debox are very focused in their approach and data driven to achieve results. Working with them was a wonderful experience!",
    },
  ],
};

export default junos;
