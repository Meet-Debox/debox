import React from "react";
import Image, { StaticImageData } from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useState } from "react";
import Heading from "./reusable/Heading";

import I1 from "../assets/Frmwk1.png";
import I2 from "../assets/Frmwk2.png";
import I3 from "../assets/Frmwk3.png";
import I4 from "../assets/Frmwk4.png";
import I5 from "../assets/Frmwk5.png";
import I6 from "../assets/Frmwk6.png";
import I7 from "../assets/Frmwk7.png";

// import Serv4 from '../public/Serv4.jpg'

const resources = [
  {
    title: "Objective and Value Setting",
    img: I1,
  },
  {
    title: "Right People",
    img: I2,
  },
  {
    title: "Efficient Systems and Processes",
    img: I3,
  },
  {
    title: "Effective Communication",
    img: I4,
  },
  {
    title: "Workplace and Environment",
    img: I5,
  },
  {
    title: "Digital Transformation",
    img: I6,
  },
  {
    title: "Performance and Sustainability",
    img: I7,
  },
];

function Services() {
  const [items, setItems] = useState(resources);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id: any) => !!selected.find((el) => el === id);
  const handleClick =
    (id: any) =>
    // @ts-ignore
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <section
      id="utility-management"
      aria-labelledby="resources-title"
      className="  text-black relative"
    >
      {/* Before and after for surrounding content with a horizontal line */}
      <div
        className='flex gap-2 after:content-[""] after:flex-1 after:border-b-2 after:border-solid after:m-auto after:mr-2.5 after:border-black before:border-black
                    before:content-[""] before:flex-1 before:border-b-2 before:border-solid before:m-auto before:ml-2.5'
      >
        <Heading>Growth and Culture Sustainability Framework</Heading>
      </div>
      <div className="mt-16 max-w-none mx-auto">
        <ScrollMenu
          scrollContainerClassName="md:mx-4 grid grid-cols-1 gap-y-10 gap-4 md:gap-0 lg:grid-cols-3 lg:text-center"
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {resources.map((resource, idx) => (
            <Card
              offsetCls={idx % 2 === 0 ? "-mt-9" : ""}
              img={resource.img}
              itemId={resource.title}
              title={resource.title}
              key={resource.title}
            />
          ))}
        </ScrollMenu>
      </div>
    </section>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-9 h-12 z-20 stroke-black hover:stroke-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-9 h-12 z-20 stroke-black hover:stroke-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </Arrow>
  );
}

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

function Card({
  onClick,
  selected,
  title,
  itemId,
  description,
  image,
  img,
  offsetCls,
}: {
  onClick?: () => void;
  selected?: number;
  title?: string;
  itemId?: string;
  description?: string;
  image?: string | StaticImageData;
  img: string | StaticImageData;
  offsetCls?: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <li
      key={title}
      className={`grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-8 min-w-[15rem] md:min-w-[30rem] py-10 ${
        offsetCls && offsetCls
      }`}
    >
      <div className="relative overflow-hidden  mx-auto">
        <Image
          height={400}
          width={500}
          className="w-full h-full"
          objectFit="cover"
          src={img}
        />
      </div>
      <div>
        <h3 className="text-2xl text-left font-bold font-heading text-black">
          {title}
        </h3>
      </div>
    </li>
  );
}

export default Services;
