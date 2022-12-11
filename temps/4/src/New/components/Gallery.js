import React from "react";
import "../style/Gallery.scss";
function Gallery() {
  const PICTURES = [
    "https://cdn.pixabay.com/photo/2022/12/02/18/37/middle-spotted-woodpecker-7631440_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/12/07/16/07/palm-7641522_960_720.jpg",
  ];

  return (
    <div className="gallery__top container">
      <h1>גלריה</h1>
      <div className="line"></div>

      <div className="gallery">
        <div className="box">
          <img src={PICTURES[0]} />
          <div className="content">
            <div className="wrap"></div>
          </div>
        </div>
        <div className="box">
          <img src={PICTURES[1]} />
          <div className="content">
            <div className="wrap"></div>
          </div>
        </div>
        <div className="box">
          <img src={PICTURES[2]} />
          <div className="content">
            <div className="wrap"></div>
          </div>
        </div>
        <div className="box">
          <img src={PICTURES[3]} />
          <div className="content">
            <div className="wrap"></div>
          </div>
        </div>
        <div className="box">
          <img src={PICTURES[4]} />
          <div className="content">
            <div className="wrap"></div>
          </div>
        </div>
        <div className="box">
          <img src={PICTURES[5]} />
          <div className="content">
            <div className="wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
