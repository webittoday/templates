import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import HeaderSection from "./New/components/HeaderSection";
import NavBar from "./New/components/NavBar";
import Gallery from "./New/components/Gallery";
import ContactInfo from "./New/components/ContactInfo";
import { Route } from "react-router-dom";
import ContactUS from "./New/components/ContactUS";
import Cards from "./New/components/Cards";
function App() {
  //for page animations
  const [windowDim, SetwindowDim] = useState({
    width: window.innerWidth,
    Height: window.innerHeight,
  });

  const detectSize = () => {
    SetwindowDim({ width: window.innerWidth, Height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.addEventListener("resize", detectSize);
    };
  }, [windowDim]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  const ref = useRef(null);
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchname").innerHTML = "INSERTNAME";
    document.getElementById("switchslogan").innerHTML = "INSERTSLOGAN";
    document.getElementById("switchinfotitle1").innerHTML = "INSERTINFOTITLE1";
    document.getElementById("switchinfotitle2").innerHTML = "INSERTINFOTITLE2";
    document.getElementById("switchinfotitle3").innerHTML = "INSERTINFOTITLE3";
    document.getElementById("switchinfo1").innerHTML = "INSERTINFO1";
    document.getElementById("switchinfo2").innerHTML = "INSERTINFO2";
    document.getElementById("switchinfo3").innerHTML = "INSERTINFO3";
    document.getElementById("switchcell").href = "INSERTCELL";
    document.getElementById("switchcell").innerHTML = "INSERTCELL";
    document.getElementById("switchsunday").innerHTML = "INSERTSUNDAY";
    document.getElementById("switchmonday").innerHTML = "INSERTMONDAY";
    document.getElementById("switchtuesday").innerHTML = "INSERTTUESDAY";
    document.getElementById("switchwednesday").innerHTML = "INSERTWEDNESDAY";
    document.getElementById("switchthursday").innerHTML = "INSERTTHURSDAY";
    document.getElementById("switchfriday").innerHTML = "INSERTFRIDAY";
    document.getElementById("switchsaturday").innerHTML = "INSERTSATURDAY";
    document.getElementById("switchabout").innerHTML = "INSERTABOUT";
    document.getElementById("switchlogo").src = "INSERTLOGO";
    document.getElementById("switchaddress").innerHTML = "INSERTADDRESS";
    document.getElementById("switchcity").innerHTML = "INSERTCITY";
    document.getElementById("switchmail").innerHTML = "INSERTMAIL";
  }, []);

  return (
    <div>
      <NavBar />
      <div id="home">
        <HeaderSection />
      </div>
      <div id="info">
        <Cards />
      </div>
      <div id="about">
        <ContactInfo />
      </div>
      <div id="contact">
        <ContactUS id="contact" style={{ direction: "rtl" }} />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
