import React from "react";
import "../style/headerName.scss";
import img from "../images/h1-img.png";
import "../style/cards.scss";
import { RiLightbulbFlashLine } from "react-icons/ri";

function HeaderName() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("header").innerHTML = "INSERTHEADER";
    document.getElementById("sortDescription").innerHTML = "INSERTPRESENT";
  }, []);

  return (
    <div className="headerName" id="headerName">
      <div className="header__logo__line">
        <div className="line"></div>
        <img src={img} />
        <div className="line"></div>
      </div>
      <h1>
        <span id="header">Toughest Defense</span>
      </h1>
      <p id="sortDescription">
        Our lawyers will also represent you in civil litigation cases such as
        divorce, child and spouse maintenance.
      </p>
      <div>
        <div className="image__grid container">
          <div className="block">
            <div className="overlay" />
            <div className="block--text"></div>
          </div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderName;
