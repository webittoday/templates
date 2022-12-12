import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/h4-graphic-1.png";
import { AiOutlineRight } from "react-icons/ai";
import img from "../images/h1-img.png";

const NavBar = () => {
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
            <NavLink to="/">
              <h1>Sales Page</h1>
            </NavLink>
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? "active" : ""}`}
          >
            <ul id="menu-primary-menu" className="menu">
              <li>
                <Link class="hover-underline-animation" smooth to="#link1">
                  Home
                </Link>
              </li>
              <li>
                <Link class="hover-underline-animation" smooth to="#link2">
                  About
                </Link>
              </li>

              <li>
                <Link smooth to="#road-map">
                  Gallery
                </Link>
              </li>
              <li>
                <Link smooth to="#white-Paper">
                  FAQ
                </Link>
              </li>
              <li>
                <Link smooth to="#about">
                  Contact US
                </Link>
              </li>
              <li>
                <div className="navbar__start__button"> Started</div>
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
