import React from 'react'
import '../style/header.scss'
import { AiFillTwitterSquare } from 'react-icons/ai';

import { HashLink as Link } from "react-router-hash-link";
//import background
import background from '../images/sean-pollock-PhYq704ffdA-unsplash.jpg'
//import clip background
// import ClipBackground from '../images/hero-shape.png'
//import doctor picture

function HeaderSection() {
  return (
    //here is the main container with background picture
      <div class="doctor__header" id="link1">
      <div class="doc__clip__background"></div>
      <div className='doc__text__button' style = {{textAlign: "center"}}>
      <h1 id = "switchname"></h1>
      <p id = "switchslogan" style = {{color: "white"}}></p>

  </div>
</div>
  )
}

export default HeaderSection