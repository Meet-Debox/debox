import CAI from "../../public/studies/CAI/CAI.png";
import CAI2 from "../../public/studies/CAI/CAI2.png";
import CAI3 from "../../public/studies/CAI/CAI3.png";
import CAI4 from "../../public/studies/CAI/CAI4.png";
import CAI5 from "../../public/studies/CAI/CAI5.png";
import Aradh from "../../public/studies/CAI/Aradh.png";
import KALKI from "../../public/studies/Kalki/KALKI.png";
import KALKI2 from "../../public/studies/Kalki/KALKI2.png";

import JUNO from "../../public/studies/JUNO/JUNO.png";
import JUNO2 from "../../public/studies/JUNO/JUNO2.png";

const main = [
  {
    client: "CAI Store",
    title:
      "Check how we helped a fast-growing women's footwear startup to structure their growth.",
    img: [CAI, CAI2, CAI3, CAI4, CAI5],
    route: "/",
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
        <div>
          <div>
            <h4>Zeroing upon the problem statement:</h4>
            <p>
              {
                "We went through a series of interactions with the management team in identifying the various bottlenecks and challenges where they were getting dragged and were spending time that should have got utilized for business growth and expansion."
              }
            </p>
          </div>
          <div>
            <h4>Bucketing of problems/challenges:</h4>
            <p>
              {
                "We bucketed the issues as Strategic, Operational and People related and bifurcated them as issues that impact growth and issues that have arisen due to lack of structure and capability development."
              }
            </p>
          </div>
          <div>
            <h4>Validation of the problem statement:</h4>
            <p>
              {
                "We understood every role from the Management and their expectations from those roles post which we interacted with the manning those roles and understood their understanding of those roles and the challenges faced by them. This gave us clarity on whether the challenges were due to communication gaps, capability gaps or lack of intent from those individuals."
              }
            </p>
          </div>
        </div>
      );
    },
    workDone() {
      return (
        <div className="space-y-4">
          <p>
            {
              "Once we had the clarity we started working on challenges and issues that could be solved through Communication, Processes and Development of the team. We also created a structured Business Plan mapped to the Manpower Plan (helping the founders have clarity of when to hire which role along with Salary Benchmarking and role requirements)."
            }
          </p>
          <h4>We delivered the following during the project:</h4>
          <ul className="space-y-6">
            <li>
              {
                "1. Detailed Job Descriptions for all roles (current and near-future basis of the Business and Manpower plan)"
              }
            </li>
            <li>
              {
                " 2. Documented existing processes and re-engineered them to bring more efficiency and automated processes that were critical to ensuring mistake proofing"
              }
            </li>
            <li>
              {
                "3. Created checklists and process flows to provide people more clarity and minimize mistakes and rework"
              }
            </li>
            <li>
              {
                "4. Communicated the Job Descriptions and Processes to all individuals and explained how these are going to help them improve their work and output and incorporated their inputs "
              }
            </li>
            <li>
              {
                "5. Analysed business data and created an 18-month business plan along with a growth-mapped Manpower Planning"
              }
            </li>
            <li>
              {
                "6. We recommended management to focus on building more best sellers and diversify into other categories like Heels"
              }
            </li>
          </ul>
        </div>
      );
    },
    outcome() {
      return (
        <div className="space-y-4">
          <p>
            {
              "The CAI Store has grown more than 6 times since we did the project with them in 2019-20. They introduced Heels within a few months of our recommendation and today Heels account for more than 40% of their sales. They have started focusing on driving more best sellers."
            }
          </p>
          <p>
            {
              "The CAI store has showcased tremendous growth, they have launched products in collaboration with Rhea Kapoor and Aashna Shroff respectively. The CAI Store launched its first retail store at the Pheonix Mall at Lower Parel, Mumbai and has become a well-known player in the women's footwear segment. "
            }
          </p>
          <p>
            {
              "Watch out for this brand, it has all the potential to become the next big thing in the Footwear industry."
            }
          </p>
        </div>
      );
    },
    framework() {
      return (
        <div>
          <ul className="space-y-2">
            <>
              <h5 className="font-bold">
                Objective and Value Setting Framework
              </h5>
              <li className="space-y-2 py-4">
                <p>- Business Planning</p>
                <p>- Historic Data Analysis</p>
                <p>- Forecasting and Strategic direction</p>
              </li>
            </>
            <>
              <h5 className="font-bold">People Practices Framework</h5>
              <li className="space-y-2 py-4">
                <p>- Job Descriptions and Key Performance Indicators</p>
                <p>- Manpower Planning</p>
                <p>- Organization Structure</p>
                <p>- Salary Benchmarking</p>
              </li>
            </>
            <>
              <h5 className="font-bold">Process Improvement Framework</h5>
              <li className="space-y-2 py-4">
                <p>- Knowledge Management</p>
                <p>- Process Documentation</p>
                <p>- Process Improvements</p>
                <p>- Process Training</p>
                <p>- Checklists and Process Flow</p>
              </li>
            </>
          </ul>
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
          "Debox is very methodical in their ways. They not only understand the needs of the company but they take time and effort to speak to each employee and understand their needs and incorporate it within the work structure. Their re-structuring has already sorted our company in so many ways which has helped our business grow only because we have gotten structured so fast. They are the key solution to all problems and take care of each and every problem from start to finish!",
      },
    ],
    refLinks: [
      "https://yourstory.com/smbstory/indian-shoemaker-brand-coronavirus-impact-footwear-industry/amp",
    ],
  },
  {
    client: "Kalki Fashion",
    title:
      "Check how we helped a fast-growing women's fashion brand to scale to newer heights by designing a Performance Management process along with data trackers and dashboards.",
    img: [KALKI, KALKI2],
    route: "/",
    industry: "Fashion",
  },
  {
    client: "Juno's Pizza",
    title:
      "Check how we helped a fast-growing pizza chain structure their growth plan and drive efficiency.",
    img: [JUNO, JUNO2],
    route: "/",
    industry: "Food",
  },
  {
    client: "Advik",
    title:
      "Check how we helped a fast-growing women's footwear startup to structure their growth.",
    img: [CAI, CAI2],
    route: "/",
    industry: "Fashion",
  },
  {
    client: "Khel",
    title:
      "Check how we helped a fast-growing women's fashion brand to scale to newer heights by designing a Performance Management process along with data trackers and dashboards.",
    img: [KALKI, KALKI2],
    route: "/",
    industry: "Fashion",
  },
  {
    client: "Bawarchi",
    title:
      "Check how we helped a fast-growing pizza chain structure their growth plan and drive efficiency.",
    img: [JUNO, JUNO2],
    route: "/",
    industry: "Food",
  },
];
export default main;
