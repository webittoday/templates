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
    document.getElementById("logo").innerHTML = "INSERTLOGO";
  }, []);

  return (
    //here is the main container with background picture
    <div class="law__header" id="link1">
      <div className="law__text">
        <img id="logo" src={logo} />
        <h1 id="name"></h1>
        <div className="line"></div>
        <p id="Headersub"></p>
      </div>
    </div>
  );
}

export default HeaderSection;
