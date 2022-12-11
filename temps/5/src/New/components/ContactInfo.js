import React from 'react'
import '../style/ContactInfo.scss'
import img from '../images/h1-img.png'
import { AiOutlineRight } from 'react-icons/ai';
function ContactInfo() {
  return (
    <div className='contactInfo ' id='link3'>
   <div className='top__text__button'>
    <p>Our lawyers will also represent you in civil litigation.</p>
    <div className='contact__button'>
      <p>Contact Us</p><AiOutlineRight className='con__icon' size={20}/>
    </div>
   </div>
   <div className='contact__cards'>
    <div className='contact__card'>
      <div className='contact__text__part'>
        <img src={img}/>
        <h1>$ <br></br>325000</h1>
        <h5>RECOVERED FOR OUR CLIENTS THIS YEAR</h5>
        <p>Sometimes you may find yourself in difficult situations and not be able to defuse the situation without going to court.</p>

        <div className='top__text__button'>
    <p></p>
    <div className='contact__button'>
      <p>Contact Us</p><AiOutlineRight className='con__icon' size={20}/>
    </div>
   </div>
      </div>
    </div>
    <div className='contact__cardd'>

    <div className='contact__text__part'>
        <img src={img}/>
        <h1>$ <br></br>325000</h1>
        <h5>RECOVERED FOR OUR CLIENTS THIS YEAR</h5>
        <p>Sometimes you may find yourself in difficult situations and not be able to defuse the situation without going to court.</p>

        <div className='top__text__button'>
    <p></p>
    <div className='contact__button'>
      <p>Contact Us</p><AiOutlineRight className='con__icon' size={20}/>
    </div>
   </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default ContactInfo