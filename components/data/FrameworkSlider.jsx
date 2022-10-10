import React from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useState } from "react";
import FrameworkCard from "../reusable/FrameworkCard";

function Services({ frameworkList }) {
  const [items, setItems] = useState(frameworkList);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  // md:mx-4 grid grid-cols-1 gap-y-10 gap-4 md:gap-0 lg:grid-cols-3 lg:text-center  xl:divide-x xl:divide-slate-400/20
  return (
    <ScrollMenu
      scrollContainerClassName="grid gap-8 grid-cols-1 lg:grid-cols-3"
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {frameworkList.map((framework) => (
        <FrameworkCard
          icon={framework.icon()}
          key={framework.title}
          title={framework.title}
        >
          {framework.content()}
        </FrameworkCard>
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-12 z-20"
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
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-12 z-20"
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

function Arrow({ children, disabled, onClick }) {
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

export default Services;
