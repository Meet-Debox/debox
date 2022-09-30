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
} from "./Animations";

const cities = [
  { name: "Fashion", image: "/JUNO.png" },
  { name: "Food", image: "/JUNO.png" },
  { name: "Logistics", image: "/JUNO.png" },
  { name: "Gaming", image: "/JUNO.png" },
  { name: "Pharma", image: "/JUNO.png" },
  { name: "Music", image: "/JUNO.png" },
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
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
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line1 = el)}
                  >
                    <Link href="/opportunities">Home</Link>
                  </li>

                  <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line2 = el)}
                  >
                    <Link href="/solutions">Our Work</Link>
                  </li>
                  <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line3 = el)}
                  >
                    <Link href="/contact-us">About Us</Link>
                  </li>
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
              {/* Returning the list of cities */}
              {cities.map((el) => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleCity(el.image, cityBackground)}
                  onMouseOut={() => handleCityReturn(cityBackground)}
                >
                  {el.name}
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
