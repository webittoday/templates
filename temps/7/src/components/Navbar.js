import React, { useEffect, useState } from 'react'
import logo from "../assets/logo-light.png"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    }
  }, []);
  return (
    <header className={`header ${scroll ? 'is-fixed' : ''}`}>
      <nav >
        <input type="checkbox" id="check" />
        <label htmlFor="check" className='checkBtn '>
          <GiHamburgerMenu className='nav-icon' />
        </label>
        <label className='logo'><img src={logo} alt="" /></label>
        <ul>
          <li><a href="#" className='active'>Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Team</a></li>

        </ul>
      </nav>
    </header>
  )
}
