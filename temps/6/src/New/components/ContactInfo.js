import React from "react";
import "../style/ContactInfo.scss";
import img from "../images/h1-img.png";
import { AiOutlineRight } from "react-icons/ai";
import Gallery from "./Gallery";
function ContactInfo() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("prasiL").innerHTML = "INSERTPRESL";
    document.getElementById("planeNameL").innerHTML = "INSERTPLANEL";
    document.getElementById("planeDescriptionL").innerHTML =
      "INSERTDESCRIPTIONPLANEL";
    document.getElementById("prasiR").innerHTML = "INSERTPRESR";
    document.getElementById("planeNameR").innerHTML = "INSERTPLANER";
    document.getElementById("planeDescriptionR").innerHTML =
      "INSERTDESCRIPTIONPLANER";
  }, []);

  const PIC = GALLERY1;

  return (
    <div className="contactInfo " id="link3">
      <div className="top__text__button">
        <p>will also represent you in civil litigation.</p>
        <div className="contact__button">
          <p>Contact Us</p>
          <AiOutlineRight className="con__icon" size={20} />
        </div>
      </div>
      <div className="contact__cards">
        <div className="contact__card">
          <div className="contact__text__part">
            <img src={PIC[0]} />
            <h1 id="prasiL"></h1> <h5 id="planeNameL"></h5>
            <p id="planeDescriptionL"></p>
            <div className="top__text__button">
              <p></p>
              <div className="contact__button">
                <p>Contact Us</p>
                <AiOutlineRight className="con__icon" size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="contact__cardd">
          <div className="contact__text__part">
            <img src={PIC[1]} />
            <h1 id="prasiR"></h1>
            <h5 id="planeNameR"></h5>
            <p id="planeDescriptionR"></p>
            <div className="top__text__button">
              <p></p>
              <div className="contact__button">
                <p>Contact Us</p>
                <AiOutlineRight className="con__icon" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
