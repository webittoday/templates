import React , { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import { HashLink as Link } from "react-router-hash-link";
import logo from '../images/logo.png'

const NavBar = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
  

    return (

   
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>

             
            <div className="container"> 
                <div id="site-header-inner">
           <div className="header__logo">
                        <NavLink to="/"><img src="" id = "switchlogo" alt="INSERTNAME" /></NavLink>
                        </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} style = {{direction: "rtl", textAlign: "right", margin: "auto"}}>
                        <ul id="menu-primary-menu" className="menu">
                        <li><Link class="hover-underline-animation" smooth to="#home">בית</Link></li>
                        <li><Link class="hover-underline-animation" smooth to="#info">מידע</Link></li>
                        <li><Link class="hover-underline-animation" smooth to="#about">אודות</Link></li>
                        <li><Link class="hover-underline-animation" smooth to="#contact">צרו קשר</Link></li>
                        <li><Link class="hover-underline-animation" smooth to="#gallery">גלריה</Link></li>
                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;