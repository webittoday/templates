import React from "react";
import "../style/Gallery.scss";
function Gallery() {
  const PICTURES = GALLERY;

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
