import React from "react";

import ClearObjectiveImg from "../assets/clear_objectives.webp";
import RightPeopleImg from "../assets/right_people.webp";
import EfficientProcessImg from "../assets/efficient_process.webp";
import EffectiveCommunicationImg from "../assets/effective_communication.webp";
import EstablishedValuesImg from "../assets/established_values.webp";
import BeignDigitalImg from "../assets/beign_digital.webp";
import { StaticImageData } from "next/image";

interface EssentialData {
  title: string;
  heading: string;
  body: string;
  img: StaticImageData;
}

const data: EssentialData[] = [
  {
    title: "Clear Objectives",
    heading: "What problem is your organization trying to solve & Why?",
    body: "Setting Goals is the first step of turning the Invisible into Visible. A Shared Goal & Purpose binds everyone together! We partner with your organization in unearthing the core purpose of your business, articulating it & communicating it to all the stakeholders. We work along with you in defining your business objective & aligning them to your People strategy thus ensuring everyone, everywhere, everyday is working towards a Common Goal!",
    img: ClearObjectiveImg,
  },
  {
    title: "Right People",
    heading:
      "Do you believe the key to a sustainable business is through your people?",
    body: "We believe in the saying - People first, then Profits. People are the most crucial part of any business and are the key driving factor of how successful a business will be. We work with your organization in designing an inclusive & People centric culture. We lay the fundamentals of your People Strategy right from recommending the most suitable Organization Structures, Hierarchies, Pay Policy to designing initiatives for attracting, engaging, rewarding & retaining your Human Capital.",
    img: RightPeopleImg,
  },
  {
    title: "Efficient Process",
    heading: "Is the success of your organization happening as a process?",
    body: "If your people can't describe what they are doing as a process, they haven't really understood what they are doing. We work with your organization in studying & revisiting the current set of structured, unstructured steps, activities followed. Basis the finding of the exercise we evaluate the relevance & effectiveness of your current practices & benchmark with industry to create well defined Processes, SOPs, Checklists & Workflows.",
    img: EfficientProcessImg,
  },
  {
    title: "Effective Communication",
    heading: "Are people in your organization feeling connected & involved?",
    body: "Communication is the key to all the good relationships in the world. We partner with you in designing communication channels that are 'HOT' H-Honest, O-Open & T-Two-Way. We design & deploy an Annual Communication Calendar to ensure your organization has relevant, engaging & ongoing means of communications to keep your people connected & involved.",
    img: EffectiveCommunicationImg,
  },
  {
    title: "Established Values",
    heading:
      "Are your people aware of the non-negotiables to your organization?",
    body: "When your values are clear to you, making decisions becomes easier. Values are formed by the deeply held beliefs that describes your Organizational Culture. We work on unearthing the existing organizational values & build a strong Value Manifesto. The manifesto provides clarity on the Do's & the Don'ts, the negotiables & the non-negotiables to your organization. This helps in setting the right expectations with everyone.",
    img: EstablishedValuesImg,
  },
  {
    title: "Being Digital",
    heading:
      "Does your organization have the capability of being Digital & Data ready?",
    body: "In today's rapidly changing and competitive business environment, being Digital & Data ready is a priority. We partner & hand hold your organization in your Digital journey. We work along with you in defining, tracking & analysing the key business parameters on a Digital platform. We design Digital solutions that are sustainable, scalable & enables your organization with data driven decisions.",
    img: BeignDigitalImg,
  },
];

function SusFramework() {
  return <div>SusFramework</div>;
}

export default SusFramework;
