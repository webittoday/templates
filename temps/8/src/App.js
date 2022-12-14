import React, { useEffect, useState } from "react";
import AOS from "aos";
import HomeSection from "./New/components/HomeSection";
import NavBar from "./New/components/NavBar";
import Service from "./New/components/Service";
import AboutUs from "./New/components/AboutUs";
import Gallery from "./New/components/Gallery";
import Contactus from "./New/components/Conatctus";

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

  return (
    <div>
      <NavBar />
      <HomeSection />
      <Service />
      <AboutUs />
      <Gallery />
      <Contactus />
    </div>
  );
}

export default App;
