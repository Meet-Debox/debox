import clsx from "clsx";
import logo from "../../public/Logo/14.jpg";
import HeroBanner from "../../public/studies/Khel/Hero_Banner.jpg";
import SideImg1 from "../../public/studies/Khel/Side1.jpg";
import SideImg2 from "../../public/studies/Khel/Side2.jpg";
// import Testimonial1 from "../../public/studies/CAI/Aradh.png";

// Icons

import Arrow1 from "../reusable/icons/Arrow1";
import ProcessFramework from "../reusable/icons/ProcessFramework";

import FrameworkCard from "../reusable/FrameworkCard";
import ComFramework from "../reusable/icons/CommunicationFramework";

const frameworkList = [
  {
    title: "Process Improvement Framework",
    icon: () => <ProcessFramework />,
    content() {
      return (
        <ul>
          <li>- Benchmarking</li>
          <li>- User Onboarding Journey</li>
          <li>- Personalized Journey using CleverTap</li>
        </ul>
      );
    },
  },
  {
    title: "Effective Communication Framework",
    icon: () => <ComFramework />,
    content() {
      return (
        <ul>
          <li>- Personalised user content strategy</li>
          <li>- Trigger based content automation</li>
          <li>- Focus on educational and awareness content</li>
        </ul>
      );
    },
  },
];

const Khel = {
  client: "KhelPlay Rummy",
  headTitle: "Helping Khel Structure their Growth - Debox Consulting",
  logo: logo,
  heroBanner: HeroBanner,
  side1: SideImg1,
  break1: "khelplay-breakImg-1",
  break2: "khelplay-breakImg-2",
  side2: SideImg2,
  slug: "helping-khel-with-user-onboarding-and-retention",
  route: `/case-studies/helping-khel-with-user-onboarding-and-retention`,
  title:
    "How we helped an Online Gaming company improve Customer Onboarding and Retention",

  industry: "Gaming",
  tags: [],
  about() {
    return (
      <div className="space-y-4">
        <p>
          {
            "Established in 2012, Khel Group today is amongst the most trusted names when it comes to playing Online Rummy and has served more than 7.5 Million users across our product offerings since inception."
          }
        </p>
        <p>
          {
            "The company has expanded its offerings into the Fantasy space through the launch of 'Khel Champs' in 2019, casual gaming space through launch of 'Khel Factory' in 2020 and hyper skill based games through launch of 'Skilli' in 2021"
          }
        </p>
        <p>
          {
            "The company has also partnered with the World’s largest online gaming company 'The Stars Group' in 2018 to bring the leading global Poker brand – 'PokerStars' to India."
          }
        </p>
        <p>
          Website: <a href="http://thekhelgroup.com">http://thekhelgroup.com</a>
        </p>
      </div>
    );
  },
  problem:
    "The Cost of Acquiring a new user is an expensive affair when it comes to Online Real Money gaming companies. The company wanted to improve the user onboarding journey which can drive more conversion and retention thus improving their ARPU (Average Return Per User).",
  timeline: "December 2020 - April 2022",
  projInfo:
    "How we helped an Online Gaming company improve Customer Onboarding and Retention",
  approachList: [
    {
      title: "Study and Benchmarking of User Journey",
      description:
        "We evaluated the entire User Journey from the first brand interaction, app download, app launch, first interaction to the first gameplay. We also benchmarked the journey within the gaming industry and outside the industry with brands/apps that have built an engaging user journey.",
    },
    {
      title: "Areas of improvement",
      description:
        "We identified areas of improvement and evaluated the current data for conversion (depositors). We presented our findings and solution to the management and started working on the deployment.",
    },
    {
      title: "Zeroing upon the problem statement",
      description:
        "We identified several gaps in the User Journey, the journey was abrupt and lacked any engagement and personalization. The journey and communications within the app were extremely transactional and focused only on driving business.",
    },
  ],
  workDoneSum() {
    return (
      <div className="space-y-4">
        <p>
          {
            "We designed a new User Journey that focused on interaction, engagement and personalization."
          }
        </p>
        <p>
          {
            "We built an Onboarding survey that gathered various insights from the user to understand whether they played Rummy before, what kind of game types they play, whether they play cash or free games, which is their preferred rummy game, and what they want to do on the platform etc."
          }
        </p>
        <p>
          {
            "Each question has a journey basis for the response given by the user and we built a personalized journey for the user from there on."
          }
        </p>
      </div>
    );
  },
  // workDoneList() {
  //   return <></>;
  // },
  outcome() {
    return (
      <div className="space-y-4">
        <p>
          {
            "We used CleverTap to implement the Onboarding Survey and we were able to improve the conversions (number of depositors) by 40% (achieved 7% conversion up from 5%). "
          }
        </p>
        <p>
          {
            "We also created user journeys basis the results of their last few games. For example - if someone was losing games / making basic mistakes we pushed them to how-to videos and to our Rummy Academy. This helped in improving in User Retention and increasing Average Gameplay Per User (AGPU)."
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

export default Khel;
