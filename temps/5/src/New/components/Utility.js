import React, { useEffect } from "react";
import "../style/utility.scss";
import { BsCheck } from "react-icons/bs";
import img from "../images/about1.jpg";
function Utility() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchHederParagraph").innerHTML =
      "INSERTPARAGRAPHABOUT";
  }, []);

  return (
    <div className="about">
      <div className="about__grid container">
        <div
          className="about__img"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img src={img} />
        </div>
        <div
          className="about__text"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h5>Discover our story</h5>
          <p id="switchHederParagraph"></p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <button id="DiscoverMore" className="about__btn">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Utility;
