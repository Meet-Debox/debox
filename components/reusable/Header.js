import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9  text-accent h-9 hover:text-primary duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    ),
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  //   useEffect(() => {
  //     //Listening for page changes.
  //     history.listen(() => {
  //       setState({ clicked: false, menuName: "Menu" });
  //     });
  //   }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9  text-accent h-9 hover:text-primary duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ),
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9  text-accent h-9 hover:text-primary duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ),
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9  text-accent h-9 hover:text-primary duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ),
      });
    }
  };

  const [scrolled, setScrolled] = useState(false);
  // For animation on scroll
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bottom-0 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      } ${scrolled && !state.clicked && "shadow-xl"}`}
    >
      <div className="container">
        <div className="wrapper px-3 md:px-10">
          <div className="inner-header">
            <div className="logo">
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 180.119 41.472"
                  className="w-28 h-8 md:w-44 md:h-10 duration-500 transition-transform cursor-pointer hover:scale-110"
                >
                  <g id="Layer_1-2" transform="translate(-0.004)">
                    <g
                      id="Group_1"
                      data-name="Group 1"
                      transform="translate(0.004)"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M34.089,0q-.027,4.449-.028,27.287a12.256,12.256,0,0,1-2.279,7.119,15.594,15.594,0,0,1-6.189,5.177,19.4,19.4,0,0,1-8.546,1.887,19.753,19.753,0,0,1-8.6-1.887A15.506,15.506,0,0,1,2.2,34.406a11.8,11.8,0,0,1-2.2-7.119A13.32,13.32,0,0,1,4.941,17.176a17.922,17.922,0,0,1,12.106-4.1,17.029,17.029,0,0,1,5.581.957,15.069,15.069,0,0,1,4.664,2.494V6.8a6.8,6.8,0,0,1,6.8-6.8ZM17.048,18.767a10.764,10.764,0,0,0-7.186,2.494,7.878,7.878,0,0,0-3.034,6.027,7.23,7.23,0,0,0,2.926,5.986,11.074,11.074,0,0,0,7.294,2.508,10.687,10.687,0,0,0,7.158-2.48,7.927,7.927,0,0,0,3.061-6.013,7.346,7.346,0,0,0-2.94-6.013,11.024,11.024,0,0,0-7.28-2.507Z"
                        transform="translate(-0.004)"
                        className="fill-[#ff2036]"
                        fill=""
                      />
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M376.4,124.736a15.553,15.553,0,0,1,6.242,5.163,12.378,12.378,0,0,1,1.455,4.082,3.828,3.828,0,0,1-3.751,4.614h-22.6a7.582,7.582,0,0,0,3.423,4.853,12.582,12.582,0,0,0,6.661,2.076,16.153,16.153,0,0,0,6.1-.75,15.376,15.376,0,0,1,9.6-.225l.383.118a.05.05,0,0,1,.025.077,16.458,16.458,0,0,1-6.119,4.636,22.9,22.9,0,0,1-9.989,1.834,20.2,20.2,0,0,1-8.6-1.942,15.741,15.741,0,0,1-6.228-5.15,11.489,11.489,0,0,1-2.185-7.091,12.567,12.567,0,0,1,1.442-5.527,14.761,14.761,0,0,1,3.613-4.516,17.284,17.284,0,0,1,5.365-3.02,19.355,19.355,0,0,1,6.593-1.119,19.694,19.694,0,0,1,8.574,1.887Zm-14.507,5.42a9.255,9.255,0,0,0-3.721,4.233h19.414a8.288,8.288,0,0,0-3.681-4.22,11.509,11.509,0,0,0-6.08-1.658A10.869,10.869,0,0,0,361.889,130.156Z"
                        transform="translate(-313.379 -109.744)"
                        className="fill-[#ff2036]"
                        fill=""
                      />
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M707.677,6.8v9.733a15.082,15.082,0,0,1,4.664-2.494,17.024,17.024,0,0,1,5.581-.957,17.922,17.922,0,0,1,12.106,4.1,13.319,13.319,0,0,1,4.934,10.111,11.809,11.809,0,0,1-2.2,7.119,15.506,15.506,0,0,1-6.242,5.177,19.753,19.753,0,0,1-8.6,1.887,19.4,19.4,0,0,1-8.548-1.887,15.582,15.582,0,0,1-6.187-5.177,12.248,12.248,0,0,1-2.279-7.119q0-22.837-.028-27.287h0a6.8,6.8,0,0,1,6.8,6.8Zm2.966,14.478a7.346,7.346,0,0,0-2.94,6.013,7.929,7.929,0,0,0,3.061,6.013,10.755,10.755,0,0,0,7.159,2.48,11.141,11.141,0,0,0,7.294-2.508,7.233,7.233,0,0,0,2.926-5.986,7.881,7.881,0,0,0-3.034-6.027,10.768,10.768,0,0,0-7.186-2.494,11.058,11.058,0,0,0-7.28,2.507Z"
                        transform="translate(-626.108)"
                        className="fill-[#ff2036]"
                        fill=""
                      />
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M1077.792,124.727a15.57,15.57,0,0,1,6.242,5.163,11.789,11.789,0,0,1,2.2,7.132,12.91,12.91,0,0,1-1.456,5.5,14.679,14.679,0,0,1-3.612,4.53,17.278,17.278,0,0,1-5.379,3.033,19.362,19.362,0,0,1-6.593,1.119,19.694,19.694,0,0,1-8.575-1.887,15.554,15.554,0,0,1-6.242-5.163,11.784,11.784,0,0,1-2.2-7.132,12.968,12.968,0,0,1,1.455-5.527,14.638,14.638,0,0,1,3.6-4.516,17.287,17.287,0,0,1,5.379-3.02,19.4,19.4,0,0,1,6.58-1.119,19.753,19.753,0,0,1,8.6,1.887ZM1062.031,131a7.876,7.876,0,0,0-3.032,6.027,7.253,7.253,0,0,0,2.924,6.013,11.038,11.038,0,0,0,7.267,2.507,10.76,10.76,0,0,0,7.186-2.494,7.876,7.876,0,0,0,3.032-6.027,7.256,7.256,0,0,0-2.924-6.013,11.077,11.077,0,0,0-7.294-2.507A10.663,10.663,0,0,0,1062.031,131Z"
                        transform="translate(-939.925 -109.735)"
                        className="fill-[#ff2036]"
                        fill=""
                      />
                      <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M1388.643,134.965a12.745,12.745,0,0,0-9.757-4.545h-2.906l10.436,11.493,4.341-4.433-2.113-2.515Z"
                        transform="translate(-1229.187 -116.506)"
                        fill="#00cdec"
                      />
                      <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M1548.081,130.42a18.876,18.876,0,0,0-14.476,6.76l-.285.34,4.284,4.436,10.475-11.536Z"
                        transform="translate(-1369.741 -116.506)"
                        fill="#00cdec"
                      />
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M1381.39,212.351l-4.287-4.341L1365.45,220.2l-5.9,6.333a19.972,19.972,0,0,0,14-5.728l3.554-3.493,2.55,2.725a20.509,20.509,0,0,0,14.975,6.5l-13.238-14.182Z"
                        transform="translate(-1214.509 -185.819)"
                        className="fill-[#ff2036]"
                        fill=""
                      />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="menu grid place-items-center">
              <button className="" disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} handleMenu={handleMenu} />
    </header>
  );
};

export default Header;
