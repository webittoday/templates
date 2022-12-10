import React from 'react'
import '../style/cards.scss'
import { RiLightbulbFlashLine } from 'react-icons/ri';
function Cards() {
  return (
   <div className='card__container' id='link2'>
     <div className='cards container'>
    <div className='card'>
    <h2 id = "switchinfotitle1"></h2>
      <p id = "switchinfo1"></p>
    </div>

    <div className='card'>
    <h2 id = "switchinfotitle2"></h2>
      <p id = "switchinfo2"></p>
    </div>


    <div className='card'>
    <h2 id = "switchinfotitle3"></h2>
      <p id = "switchinfo3"></p>
    </div>
    </div>
   </div>
  )
}

export default Cards