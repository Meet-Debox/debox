import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./animations.js";

const industries = [
  {
    name: "Fashion",
    image: "/studies/CAI/CAI3.png",
    route: "/case-studies?category=Fashion",
  },
  {
    name: "Food",
    image: "/studies/JUNO/JUNO.png",
    route: "/case-studies?category=Food",
  },
  {
    name: "Gaming",
    image: "/studies/Khel/KHEL.jpg",
    route: "/case-studies?category=Gaming",
  },
  { name: "More", image: "", route: "/case-studies" },
];

const Hamburger = ({ state, handleMenu }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const navItems = [
    { name: "Home", route: "/", line: line1 },
    { name: "Our Work", route: "/case-studies", line: line2 },
    { name: "About Us", route: "/about", line: line3 },
  ];

  useEffect(() => {
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background !bg-blend-luminosity"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  {navItems.map((ni) => (
                    <Link href={ni.route} key={ni.name}>
                      <li
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (ni.line = el)}
                        onClick={() => handleMenu()}
                      >
                        {ni.name}
                      </li>
                    </Link>
                  ))}

                  {/* <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                    onClick={() => handleMenu()}
                  >
                    <Link href="/">Home</Link>
                  </li>

                  <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line2 = el)}
                    onClick={() => handleMenu()}
                  >
                    <Link href="/case-studies">Our Work</Link>
                  </li>
                  <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line3 = el)}
                    onClick={() => handleMenu()}
                  >
                    <Link href="/about">About Us</Link>
                  </li> */}
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info text-2xl">
                <h3>Our Story</h3>
                <p>
                  {
                    "From redesigning and successful deployment of the Supply Chain process for Nippo Batteries to designing and developing India's first true hyperlocal job and Talent search platform, Debox has come a long way in solving business and real-life problems through their logical reasoning and innovative thinking."
                  }
                </p>
              </div>
            </div>
            <div className="locations">
              Industries:
              {industries.map((el) => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleCity(el.image, cityBackground)}
                  onMouseOut={() => handleCityReturn(cityBackground)}
                  onClick={() => {
                    handleMenu();
                  }}
                >
                  <Link
                    href={{
                      pathname: "case-studies",
                      query: { category: el.name },
                    }}
                  >
                    {el.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
