import React from 'react'
import '../style/faq.scss'
import logo1 from '../logo/4.png'
import logo2 from '../logo/4.png'
import logo3 from '../logo/4.png'
import logo4 from '../logo/4.png'
import logo5 from '../logo/4.png'
const phoneStyle = {
  color: "#B9B9BF",
}
function Faq() {
  return (
    <div className='faq'>
    {/* heading */}
    <h2>שעות פעילות</h2>
    <p id = "switchhours"></p>
    <h2>קצת עלינו</h2>
    <span><a id = "switchphone" style = {phoneStyle}></a> :טלפון</span>
    <br />
    <span><a id = "switchmail" style = {phoneStyle}></a> :מייל</span>
    <br />
    <span>כתובת: <span id = "switchaddress"></span>, <span id = "switchcity"></span></span>
    </div>
  )
}

export default Faq