import React, { useRef, useEffect } from "react";
import "../style/cards.scss";
import { GoLaw } from "react-icons/go";

import { RiLightbulbFlashLine } from "react-icons/ri";
function Cards() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchSubHederCards").innerHTML =
      "INSERTSUBHEADERCARDS";

    document.getElementById("cardTitle1").innerHTML = "INSERTCARTHEADER1";
    document.getElementById("cardTitle2").innerHTML = "INSERTCARTHEADER2";
    document.getElementById("cardTitle3").innerHTML = "INSERTCARTHEADER3";

    document.getElementById("cardP1").innerHTML = "INSERTCARDPARAGRAPH1";
    document.getElementById("cardP2").innerHTML = "INSERTCARDPARAGRAPH2";
    document.getElementById("cardP3").innerHTML = "INSERTCARDPARAGRAPH3";
  }, []);

  return (
    <div className="card__back">
      {/* section introduction */}

      <div
        className="Team__headerName"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 id="switchHederCards">Why Choose Us</h1>
        <p id="switchSubHederCards"></p>
      </div>

      <div className="cards container">
        {/* cards grid */}
        <div className="card" data-aos="fade-right" data-aos-duration="800">
          <RiLightbulbFlashLine className="icon" size={70} />
          {/* heading */}
          <h5 id="cardTitle1"></h5>
          {/* paragraph */}
          <p id="cardP1"></p>
        </div>

        {/* cards grid */}
        <div className="card">
          <RiLightbulbFlashLine className="icon" size={70} />
          {/* heading */}
          <h5 id="cardTitle2">Q</h5>
          {/* paragraph */}
          <p id="cardP2"></p>
        </div>

        {/* cards grid */}
        <div className="card" data-aos="fade-left" data-aos-duration="800">
          <RiLightbulbFlashLine className="icon" size={70} />
          {/* heading */}
          <h5 id="cardTitle3"></h5>
          {/* paragraph */}
          <p id="cardP3"></p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
