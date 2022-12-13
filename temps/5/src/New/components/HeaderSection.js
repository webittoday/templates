import React, { useEffect } from "react";
import "../style/header.scss";
import { GoLaw } from "react-icons/go";

import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/h4-graphic-1.png";

import { RiLightbulbFlashLine } from "react-icons/ri";

function HeaderSection() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchHeader").innerHTML = "INSERTHEADER";
    document.getElementById("switchWelcomeHeader").innerHTML =
      "INSERTHEADERWELCOME";
  }, []);

  return (
    //here is the main container with background picture
    <div class="home" id="link1">
      <div className="home__text" data-aos="fade-up" data-aos-duration="800">
        <h1 id="switchHeader"></h1>
        <p id="switchWelcomeHeader"></p>
        <button className="home__button">Discover More</button>
      </div>
    </div>
  );
}

export default HeaderSection;
