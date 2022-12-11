import React from "react";
import "../style/utility.scss";
import { BsCheck } from "react-icons/bs";
import img from "../images/about1.jpg";
function Utility() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchHederAbout").innerHTML = "INSERTHEADERABOUT";
    document.getElementById("switchHederParagraph").innerHTML =
      "INSERTPARAGRAPHABOUT";

    document.getElementById("switchCheck1").innerHTML = "INSERTCHECK1";
    document.getElementById("switchCheck2").innerHTML = "INSERTCHECK2";
    document.getElementById("switchCheck3").innerHTML = "INSERTCHECK3";

    document.getElementById("DiscoverMore").innerHTML =
      "INSERTDISCOVERMOREABOUT";
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
          <h5 id="switchHederAbout">Discover our story</h5>
          <p id="switchHederParagraph">
            Velis demo enim ipsam voluptatem quia voluptas sit aspernatures
            netsum norems fugit, seditum netis velas matrix net nesciunt neque
            etsum quis autem velis reprehenderit etsim.
          </p>
          <div className="check__line">
            <li id="switchCheck1">
              <BsCheck size={28} />
              <p>Quias netus magni netsum eos qui ratione sequi.</p>
            </li>
            <li id="switchCheck2">
              <BsCheck size={28} />
              <p>Quias netus magni netsum eos qui ratione sequi.</p>
            </li>
            <li id="switchCheck3">
              <BsCheck size={28} />
              <p>Quias netus magni netsum eos qui ratione sequi.</p>
            </li>
          </div>
          <button id="DiscoverMore" className="about__btn">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Utility;
