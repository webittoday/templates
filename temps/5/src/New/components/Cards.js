import React, { useRef, useEffect } from "react";
import "../style/cards.scss";
import { GoLaw } from "react-icons/go";

import { RiLightbulbFlashLine } from "react-icons/ri";
function Cards() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchHederCards").innerHTML = "INSERTHEADERCARDS";
    document.getElementById("switchSubHederCards").innerHTML =
      "INSERTSUBHEADERCARDS";

    document.getElementById("cardTitle1").innerHTML = "INSERTCARTHEADER1";
    document.getElementById("cardTitle2").innerHTML = "INSERTCARTHEADER2";
    document.getElementById("cardTitle4").innerHTML = "INSERTCARTHEADER3";

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
        <p id="switchSubHederCards">
          The best place to get a tattoo in New York.
        </p>
      </div>

      <div className="cards container">
        {/* cards grid */}
        <div className="card" data-aos="fade-right" data-aos-duration="800">
          <RiLightbulbFlashLine className="icon" size={70} />
          {/* heading */}
          <h5 id="cardTitle1">Qualified Personnel</h5>
          {/* paragraph */}
          <p id="cardP1">
            Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae
            etsum nisle varius netsum.
          </p>
        </div>

        {/* cards grid */}
        <div className="card">
          <RiLightbulbFlashLine className="icon" size={70} />
          {/* heading */}
          <h5 id="cardTitle2">Qualified Personnel</h5>
          {/* paragraph */}
          <p id="cardP2">
            Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae
            etsum nisle varius netsum.
          </p>
        </div>

        {/* cards grid */}
        <div className="card" data-aos="fade-left" data-aos-duration="800">
          <RiLightbulbFlashLine className="icon" size={70} />
          {/* heading */}
          <h5 id="cardTitle3"> Qualified Personnel</h5>
          {/* paragraph */}
          <p id="cardP3">
            Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae
            etsum nisle varius netsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
