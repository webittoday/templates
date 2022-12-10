import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiGrid,
  FiCast,
  FiPhoneOutgoing,
} from "react-icons/fi";

const HeaderCreative = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div
        className={
          navbar ? "beny_tm_topbar creative animate" : "beny_tm_topbar creative"
        }
      >
        <div className="in container">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                <img
                  className="light-img"
                  src="INSERTLOGO"
                  alt="INSERTNAME"
                />
                <img className="dark-img" src="INSERTLOGO" alt="INSERTNAME" />
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "בית",
                  "אודות",
                  "גלריה",
                  "צרו קשר",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">בית</span>
                    <span className="second">בית</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">אודות</span>
                    <span className="second">אודות</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span className="first">גלריה</span>
                    <span className="second">גלריה</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">צרו קשר</span>
                    <span className="second">צרו קשר</span>
                  </a>
                </li>
                <li>
                  {/* <a href="https://themeforest.net/checkout/from_item/33910000?license=regular">
                    <span className="wrapper">
                      <span className="first">Buy Now</span>
                      <span className="second">Buy Now</span>
                    </span>
                  </a> */}
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["בית", "אודות", "גלריה", "צרו קשר"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span>בית</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              <span>אודות</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FiGrid />
              <span>גלריה</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhoneOutgoing />
              <span>צרו קשר</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default HeaderCreative;
