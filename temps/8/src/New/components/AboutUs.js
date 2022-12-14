import React from "react";
import "../style/aboutus.scss";
import one from "../images/image1.png";
import two from "../images/image2.png";
import three from "../images/image3.png";
import four from "../images/image4.png";
import { GoHome } from "react-icons/go";

function AboutUs() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("slogn").innerHTML = "INSERTSLOGEN";
    document.getElementById("subslognheder1").innerHTML = "INSERTSUBSLOGENH1";
    document.getElementById("subslogn1").innerHTML = "INSERTSUBSLOGENP1";
    document.getElementById("subslognheder2").innerHTML = "INSERTSUBSLOGENH2";
    document.getElementById("subslogn2").innerHTML = "INSERTSUBSLOGENP2";
  }, []);

  return (
    <div className="about container-fluid" id="about">
      <div>
        <div className="about-content">
          <div>
            <p>Briefly about us</p>
            <h1 id="slogn"></h1>

            <div className="card">
              <div className="card-content">
                <div className="card-data">
                  <h3 id="subslognheder1"></h3>
                  <p id="subslogn1"></p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="card-data">
                  <h3 id="subslognheder2"></h3>
                  <p id="subslogn2"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
