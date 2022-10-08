import Heading from "../reusable/Heading";

import cai from "./cai";

import CAI from "../../public/studies/CAI/CAI.png";
import CAI2 from "../../public/studies/CAI/CAI2.png";

import KALKI from "../../public/studies/Kalki/KALKI.png";
import KALKI2 from "../../public/studies/Kalki/KALKI2.png";

import JUNO from "../../public/studies/JUNO/JUNO.png";
import JUNO2 from "../../public/studies/JUNO/JUNO2.png";

import FrameworkCard from "../reusable/FrameworkCard";

const main = [
  cai,
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
