import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/h4-graphic-1.png";
import { AiOutlineRight } from "react-icons/ai";
import img from "../images/h1-img.png";

const NavBar = () => {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchLogoLinkTitle").innerHTML = "INSERTLOGOLINK";
    document.getElementById("switchLinkTitle1").innerHTML = "INSERTLINKHEDER1";
    document.getElementById("switchLinkTitle2").innerHTML = "INSERTLINKHEDER2";
    document.getElementById("switchLinkTitle3").innerHTML = "INSERTLINKHEDER3";
    document.getElementById("switchLinkTitle4").innerHTML = "INSERTLINKHEDER4";
    document.getElementById("switchLinkTitle5").innerHTML = "INSERTLINKHEDER5";
    document.getElementById("switchLinkTitle6").innerHTML = "INSERTLINKHEDER6";
    document.getElementById("switchLinkTitleRight").innerHTML =
      "INSERTLINKHEDERRIGHT";
  }, []);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            <NavLink id="switchLogoLinkTitle" to="/">
              <h1>Sales Page</h1>
            </NavLink>
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? "active" : ""}`}
          >
            <ul id="menu-primary-menu" className="menu">
              <li>
                <Link
                  class="hover-underline-animation"
                  smooth
                  to="#link1"
                  id="switchLinkTitle1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  class="hover-underline-animation"
                  smooth
                  id="switchLinkTitle2"
                  to="#link2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  class="hover-underline-animation"
                  smooth
                  id="switchLinkTitle3"
                  to="#link3"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link smooth id="switchLinkTitle4" to="#road-map">
                  Gallery
                </Link>
              </li>
              <li>
                <Link smooth id="switchLinkTitle5" to="#white-Paper">
                  FAQ
                </Link>
              </li>
              <li>
                <Link smooth id="switchLinkTitle6" to="#about">
                  Contact US
                </Link>
              </li>
              <li>
                <div
                  className="navbar__start__button"
                  id="switchLinkTitleRight"
                >
                  {" "}
                  Started
                </div>
              </li>
            </ul>
          </nav>
          <div
            className={`mobile-button ${menuActive ? "active" : ""}`}
            onClick={handleMenuActive}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
