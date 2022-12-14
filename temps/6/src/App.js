import React, { useEffect, useState } from "react";
import AOS from "aos";
import HeaderSection from "./New/components/HeaderSection";
import NavBar from "./New/components/NavBar";
import Gallery from "./New/components/Gallery";
import Utility from "./New/components/Utility";
import ContactInfo from "./New/components/ContactInfo";
import { Route } from "react-router-dom";
import WhitePaper from "./New/components/WhitePaper";
import ContactUS from "./New/components/ContactUS";
import Cards from "./New/components/Cards";
import HeaderName from "./New/components/HeaderName";
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
      <HeaderSection />
      <HeaderName />
      <ContactInfo />
      <ContactUS />
    </div>
  );
}

export default App;
