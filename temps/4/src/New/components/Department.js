import React from 'react'
import '../style/department.scss'
import img from '../images/crutches.png'
import { RiLightbulbFlashLine } from 'react-icons/ri';
function Department() {
  return (
    <div className='dep__container' id='link2'>
        <h1>Our department</h1>
     <div className='line'></div>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
Lorem Ipsum the industry's standard dummy text.</p>
    <div className='deps scrollmenu container'>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   <div className='dep'><div className='dep__circle'><RiLightbulbFlashLine className='dep__icon' size={50}/></div>
   <h2>Qualified Doctors</h2>
   </div>
   </div>

{/* picture with text */}
   <div className='dep__pic__text container'>
   <div className='dep_pic'><img src={img}/></div>
    <div className='dep__text'><h1>Welcome to our Crutches <span> Crutches</span></h1> <p>
Welcome to our Crutches
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.
</p>
<span>Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <br></br>
<button className='doc__button'>Read More</button>
</div>
   </div>


  </div>
  )
}

export default Department