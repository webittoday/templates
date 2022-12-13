import React from "react";
import "../style/whitePaper.scss";
import img from "../images/cov (2).png";
function WhitePaper() {
  const PICTURES = GALLERY;

  return (
    <div className="gallery__back">
      {/* section introduction */}

      <div
        className="Team__headerName"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1>Our Work</h1>
        <p>Some pictures from recent works.</p>
      </div>

      <div
        className="card-container container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="card__gallery">
          <img
            className="card-img"
            src={PICTURES[0]}
            alt="spooky jack-o-lantern"
          />
        </div>
        <div className="card__gallery">
          <img className="card-img" src={PICTURES[1]} alt="hocus pocus decor" />
        </div>
        <div className="card__gallery">
          <img className="card-img" src={PICTURES[2]} alt="spider web" />
        </div>
        <div className="card__gallery">
          <img className="card-img" src={PICTURES[3]} alt="spooky forest" />
        </div>
        <div className="card__gallery">
          <img
            className="card-img"
            src={PICTURES[4]}
            alt="jack-o-lantern with witch hat"
          />
        </div>
        <div className="card__gallery">
          <img
            className="card-img"
            src={PICTURES[5]}
            alt="dog in ghost costume"
          />
        </div>
        <div className="card__gallery">
          <img
            className="card-img"
            src={PICTURES[6]}
            alt="jack-o-lantern scarecrow"
          />
        </div>
        <div className="card__gallery">
          <img
            className="card-img"
            src={PICTURES[7]}
            alt="spooky skeleton screaming"
          />
        </div>
      </div>
    </div>
  );
}

export default WhitePaper;
