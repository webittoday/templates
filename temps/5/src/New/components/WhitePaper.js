import React from "react";
import "../style/whitePaper.scss";
import img from "../images/cov (2).png";
function WhitePaper() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchIntroductionHeader").innerHTML =
      "INSERTINTHEADER";
    document.getElementById("switchIntroductionParagraph").innerHTML =
      "INSERTINTPARAGRAPH";

    document.getElementById("switchImgTitle0").innerHTML = "INSERTIMGTITLE0";
    document.getElementById("switchImgTitle1").innerHTML = "INSERTIMGTITLE1";
    document.getElementById("switchImgTitle2").innerHTML = "INSERTIMGTITLE2";
    document.getElementById("switchImgTitle3").innerHTML = "INSERTIMGTITLE3";
    document.getElementById("switchImgTitle4").innerHTML = "INSERTIMGTITLE4";
    document.getElementById("switchImgTitle5").innerHTML = "INSERTIMGTITLE5";
    document.getElementById("switchImgTitle6").innerHTML = "INSERTIMGTITLE6";
    document.getElementById("switchImgTitle7").innerHTML = "INSERTIMGTITLE7";

    document.getElementById("footerPaper").innerHTML = "INSERTFOOTER";
  }, []);

  const PICTURES = GALLERY;

  return (
    <div className="gallery__back">
      {/* section introduction */}

      <div
        className="Team__headerName"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 id="switchIntroductionHeader">Our Work</h1>
        <p id="switchIntroductionParagraph">
          Quis autem velis ets reprehendet voluptate.
        </p>
      </div>

      <div
        className="card-container container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle0">
            I
          </p>
          <img
            className="card-img"
            src={PICTURES[0]}
            alt="spooky jack-o-lantern"
          />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle1">
            hope
          </p>
          <img className="card-img" src={PICTURES[1]} alt="hocus pocus decor" />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle2">
            you
          </p>
          <img className="card-img" src={PICTURES[2]} alt="spider web" />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle3">
            have
          </p>
          <img className="card-img" src={PICTURES[3]} alt="spooky forest" />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle4">
            a
          </p>
          <img
            className="card-img"
            src={PICTURES[4]}
            alt="jack-o-lantern with witch hat"
          />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle5">
            safe
          </p>
          <img
            className="card-img"
            src={PICTURES[5]}
            alt="dog in ghost costume"
          />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle6">
            and
          </p>
          <img
            className="card-img"
            src={PICTURES[6]}
            alt="jack-o-lantern scarecrow"
          />
        </div>
        <div className="card__gallery">
          <p className="card-text" id="switchImgTitle7 ">
            spooky
          </p>
          <img
            className="card-img"
            src={PICTURES[7]}
            alt="spooky skeleton screaming"
          />
        </div>
      </div>
      <p id="footerPaper">
        Like what you see? Follow us <span> @brooklyn-tattos</span>
      </p>
    </div>
  );
}

export default WhitePaper;
