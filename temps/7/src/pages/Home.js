import { React, useEffect } from "react";

import { ImPlay2 } from "react-icons/im";
import { BsPhone } from "react-icons/bs";
import { AiOutlineFlag, AiFillAppstore } from "react-icons/ai";
import { TfiFiles } from "react-icons/tfi";
import { BsTools } from "react-icons/bs";
import { RxDesktop } from "react-icons/rx";
import { SiBrandfolder } from "react-icons/si";
import { IoMdPhotos } from "react-icons/io";
import { SiPhotopea } from "react-icons/si";
import { FaTabletAlt } from "react-icons/fa";
import one from "../assets/1.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";
import seven from "../assets/seven.jpg";
import eight from "../assets/eight.jpg";

export default function Home() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("business_name").innerHTML = "INSERTNAME";
    document.getElementById("slogan").innerHTML = "INSERTSLOGAN";
    document.getElementById("logocenter").src = "INSERTLOGO";
    document.getElementById("heder").innerHTML = "INSERTHEADER";
    document.getElementById("about").innerHTML = "INSERTABOUT";
    document.getElementById("about2").innerHTML = "INSERTABOUT2";
    document.getElementById("sec1").innerHTML = "INSERTSEC1";
    document.getElementById("secT1").innerHTML = "INSERTSECT1";
    document.getElementById("sec2").innerHTML = "INSERTSECT2";
    document.getElementById("secT2").innerHTML = "INSERTSECT2";
    document.getElementById("sec3").innerHTML = "INSERTSECT3";
    document.getElementById("secT3").innerHTML = "INSERTABOUT3";
  }, []);

  const PIC = GALLERY;

  return (
    <>
      <div className="HomeSectionOne">
        <div className="first">
          <div>
            <h2>
              <i id="business_name"></i>
            </h2>
            <h1 id="slogan"></h1>
          </div>
        </div>
      </div>

      <div className="HomeSectionTwo" id="HomeSectionTwo">
        <div>
          <img src="" id="logocenter" alt="INSERTNAME" />
          <h1 id="heder"></h1>
          <hr />
          <hr />
          <h4 id="about"></h4>
        </div>
      </div>

      <div className="HomeSectionFive">
        <div>
          <h1>Best Business Solutions</h1>
          <p id="about2"></p>
        </div>
      </div>

      <div className="HomeSectionSeven">
        <div className="cards">
          <div className="card one">
            <span>
              <h2 id="sec1"></h2>
              <p id="secT1"></p>
            </span>
          </div>
          <div className="card two">
            <span>
              <h2 id="sec2"> </h2>
              <p id="secT2"></p>
            </span>
          </div>
          <div className="card three">
            <span>
              <h2 id="sec3"> </h2>
              <p id="secT3"></p>
            </span>
          </div>
        </div>
      </div>

      <div className="HomeGallery" id="HomeGallery">
        <span>
          <img src={PIC[0]} alt="" />
          <img src={PIC[1]} alt="" />
          <img src={PIC[2]} alt="" />
          <img src={PIC[3]} alt="" />
          <img src={PIC[4]} alt="" />
          <img src={PIC[5]} alt="" />
        </span>
      </div>

      <div className="HomeContact" id="HomeContact">
        <div className="cards">
          <div className="card one">
            <span>
              <h1>Need Help?!!</h1>
              <h2>Don’t Hesitate To Ask</h2>
            </span>
          </div>
          <div className="card two">
            <span>
              <h1>Write To Us</h1>

              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Name
                </label>
              </div>
              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Email
                </label>
              </div>
              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Phone Number
                </label>
              </div>
              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input
                  required=""
                  placeholder="Name"
                  class="form__field"
                  type="input"
                />
                <label class="form__label" for="name">
                  Message
                </label>
              </div>
              <div>
                <button>Send Message</button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
