import React , { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import { HashLink as Link } from "react-router-hash-link";
import logo from '../images/Gfit-Logo-mini.png'
const navStyle = {

    width: "30.2%",
    direction: "rtl",

};
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
    
       <div>
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
           <div className="header__logo">
                        <NavLink to="/"><img src={logo} alt="Crybox" /></NavLink>
                    </div>
             
            <div className="container">
                <div id="site-header-inner">
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} style={navStyle}>
                        <ul id="menu-primary-menu" className="menu">
                        <li><Link smooth to="#navbar">בית</Link></li>
                        <li><Link smooth to="#overview">אודות</Link></li>
                        <li><Link smooth to="#faq">מצאו אותנו</Link></li>
                        <li><Link smooth to="#cards">גלריה</Link></li>
                        <li><Link smooth to="#contact">לפניות</Link></li>
                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
       </div>
    );
}

export default NavBar;