import React from "react";
import Link from "next/link";

const routes = [
  {
    route: "/",
    text: "What we do",
  },
  {
    route: "/about",
    text: "About Us",
  },
  {
    route: "/case-studies",
    text: "Case Studies",
  },
  {
    route: "/connect",
    text: "Connect",
  },
];

const industries = [
  {
    name: "fashion",
  },
  {
    name: "logistics",
  },
  {
    name: "music",
  },
];

function Menu() {
  return (
    <div className="hamburger-menu">
      {/* below refers to accent color in animation */}
      <div className="menu-sec-bg-color">
        <div className="menu-layer">
          <div className="layer-hover-bg">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    {routes.map((route) => (
                      <li key={route.text}>{route.text}</li>
                    ))}
                  </ul>
                </nav>
                <div className="info">
                  <h3>Our Story</h3>
                  <p>
                    {
                      "From redesigning and successful deployment of the Supply Chain process for Nippo Batteries to designing and developing India's first true hyperlocal job and Talent search platform, Debox has come a long way in solving business and real-life problems through their logical reasoning and innovative thinking."
                    }
                  </p>
                </div>
                <div className="industries">
                  Industries:
                  {industries.map((industry) => (
                    <span key={industry.name}>{industry.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
