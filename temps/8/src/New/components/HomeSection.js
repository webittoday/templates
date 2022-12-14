import React from "react";
import "../style/header.scss";

function HomeSection() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("headr").innerHTML = "INSERTHEADER";
    document.getElementById("subHeadr").innerHTML = "INSERTSUBHEADER";
  }, []);

  return (
    //here is the main container with background picture
    <div className="home-Header" id="home">
      {/* home content container */}
      <div
        className="home-content container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div>
          {/* home header */}
          <h1 id="headr"></h1>
          <p id="subHeadr"></p>
          {/* home button */}
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
