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
              <img src={logo} alt="Crybox" />
            </NavLink>
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? "active" : ""}`}
          >
            <ul id="menu-primary-menu" className="menu">
              <li>
                <Link class="hover-underline-animation" smooth to="#headerName">
                  Mint
                </Link>
              </li>
              <li>
                <Link class="hover-underline-animation" smooth to="#link3">
                  OVERVIEW
                </Link>
              </li>
              <li>
                <Link class="hover-underline-animation" smooth to="#link4">
                  Utilities
                </Link>
              </li>
              <li>
                <Link class="hover-underline-animation" smooth to="#link5">
                  Contact Us
                </Link>
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
