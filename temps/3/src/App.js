
import React,{ useRef, useEffect , useState }  from 'react';
import AOS from 'aos';
import HeaderSection from './New/components/HeaderSection';
import NavBar from './New/components/NavBar';
import OverView from './New/components/OverView';
import Utility from './New/components/Utility';
import Form from './New/components/Form';
import Roadmap from './New/components/Roadmap';
import { Route } from 'react-router-dom';
import WhitePaper from './New/components/WhitePaper';
import Faq from './New/components/Faq';
import ReactCarousel from './New/components/ReactCarousel';
import Cards from './New/components/Cards';

function App() {


  //for page animations 
  const [windowDim,SetwindowDim] = useState({width: window.innerWidth, Height: window.innerHeight});

  const detectSize =()=>{
    SetwindowDim({width: window.innerWidth, Height: window.innerHeight});
  }
  
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  },);
  
  const ref = useRef(null);
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById('switchname').innerHTML = "INSERTNAME";
    document.getElementById('switchslogan').innerHTML = "INSERTSLOGAN";
    document.getElementById('switchabout').innerHTML = "INSERTABOUT";
    document.getElementById('switchroadtitle').innerHTML = "INSERTROADTITLE";
    document.getElementById('switchroadtext').innerHTML = "INSERTROADTEXT";
    document.getElementById('switchpapertitle').innerHTML = "INSERTPAPERTITLE";
    document.getElementById('switchpapertext').innerHTML = "INSERTPAPERTEXT";
    document.getElementById('switchhours').innerHTML = "INSERTHOURS";
    document.getElementById('switchphone').innerHTML = "INSERTCELL";
    document.getElementById('switchphone').href = "INSERTCELL";
    document.getElementById('switchmail').innerHTML = "INSERTMAIL";
    document.getElementById('switchmail').href = "mailto: INSERTMAIL";
    document.getElementById('switchaddress').innerHTML = "INSERTADDRESS";
    document.getElementById('switchcity').innerHTML = "INSERTCITY";
    document.getElementById('switchrecp').value = "INSERTMAIL";
  }, []);

  return (
      <div>
      <div id = "navbar"><NavBar/></div>
      <HeaderSection/>
      <div id = "overview"><OverView/></div>
      {/* <div id = "utilities"><Utility/></div> */}
      <div id = "road-map"><Roadmap/></div>
      <div id = "white-paper"><WhitePaper/></div>
      <div id = "faq"><Faq/></div>
      <div id = "cards"><Cards/></div>
      <div id = "contact"><Form/></div>
      </div>
  );
}

export default App;