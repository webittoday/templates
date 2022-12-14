import React from "react";
import "../style/gallery.scss";
import one from "../images/gallery-img1.png";
import two from "../images/gallery-img2.png";
import three from "../images/gallery-img3.png";
import four from "../images/gallery-img4.png";
import five from "../images/gallery-img5.png";
import six from "../images/gallery-img6.png";

const PICTURES = GALLERY;

function Gallery() {
  return (
    // here is gallery section
    <div className="gallery" id="gallery">
      {/* gallery header here */}
      <div className="gallery-header">
        <div>
          <p className="paragraphHeader">See Our Experience</p>
          <h2>Photo Gallery</h2>
          <span>
            <hr />
          </span>
        </div>
      </div>
      {/* gallery images */}
      <div className="gallery-image">
        {/* gallery img row one */}
        <div className="images">
          <img src={PICTURES[0]} />
          <img src={PICTURES[1]} />
          <img src={PICTURES[2]} />
        </div>
        {/* gallery image row two */}
        <div className="images">
          <img src={PICTURES[3]} />
          <img src={PICTURES[4]} />
          <img src={PICTURES[5]} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
