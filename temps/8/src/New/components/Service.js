import React from "react";
import "../style/service.scss";
import { GoHome } from "react-icons/go";

function Service() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("HeaderAbout").innerHTML = "INSERTHEADERABOUT";
    document.getElementById("paAbout").innerHTML = "INSERTPAABOUT";
  }, []);

  return (
    // here is service complete secion
    <div className="service" id="service">
      {/* service header here */}
      <div className="service-header">
        <div>
          <p className="paragraphHeader">What We Offer</p>
          <h2 id="HeaderAbout"></h2>
          <span>
            <hr />
          </span>
          <p className="paragraphFooter" id="paAbout"></p>
        </div>
      </div>

      {/* service cards is here */}
    </div>
  );
}

export default Service;
