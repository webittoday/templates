import React from "react";
import "../style/header.scss";
import { GoLaw } from "react-icons/go";

import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/h4-graphic-1.png";

function HeaderSection() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("name").innerHTML = "INSERTNAME";
    document.getElementById("Headersub").innerHTML = "INSERTSLOGAN";
    document.getElementById("personal1").innerHTML = "INSERTPERSONE1";
    document.getElementById("personal2").innerHTML = "INSERTPERSONE2";
    document.getElementById("personal3").innerHTML = "INSERTPERSONE3";
    document.getElementById("logo").innerHTML = "INSERTLOGO";
  }, []);

  return (
    //here is the main container with background picture
    <div class="law__header" id="link1">
      <div className="law__text">
        <img id="logo" src={logo} />
        <h1 id="name">You Deserve The Best Defence Laywer</h1>
        <div className="line"></div>
        <p id="Headersub">Lorem ipsum dolor sit amet consectet adipis.</p>
      </div>
      <div className="law__icon__grid__back">
        <div className="law__icon__grid container">
          <div className="law__icon__box">
            <GoLaw size={55} />
            <h1 id="personal1">PERSONAL INJURY</h1>
          </div>
          <div className="law__line"></div>

          <div className="law__icon__box">
            <GoLaw size={55} />
            <h1 id="personal2">PERSONAL INJURY</h1>
          </div>
          <div className="law__line"></div>

          <div className="law__icon__box">
            <GoLaw size={55} />
            <h1 id="personal3">PERSONAL INJURY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
