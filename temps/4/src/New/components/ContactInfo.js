import React from 'react'
import '../style/ContactInfo.scss'
import dp from '../images/avatar2.png'
function ContactInfo() {
  return (
    <div className='contactInfo' id='link3'>
     <h1>אודות</h1>
     <div className='line'></div>
      <p id = "switchabout"></p>
      {/* <div className='contact__info__back container'> */}
      <div className='contact__info__grid container'>
{/* user picture */}
        <div className='contact__info__card' style = {{margin: "auto", direction: "rtl"}}>
          {/* the card with info
          <h1>Weekly Timetable</h1>
          {/* first time table */}
          <div className='time__slot'>
            <p>ראשון</p>
            <p id = "switchsunday"></p>
          </div>

          <div className='time__slot'>
            <p>שני</p>
            <p id = "switchmonday"></p>
          </div>

          <div className='time__slot'>
            <p>שלישי</p>
            <p id = "switchtuesday"></p>
          </div>

          <div className='time__slot'>
            <p>רביעי</p>
            <p id = "switchwednesday"></p>
          </div>

          <div className='time__slot'>
            <p>חמישי</p>
            <p id = "switchthursday"></p>
          </div>


          <div className='time__slot'>
            <p>שישי</p>
            <p id = "switchfriday"></p>
          </div>

          <div className='time__slot'>
            <p>שבת</p>
            <p id = "switchsaturday"></p>
          </div>

          {/* bottom call now */}

          <div className='contact__card__phone' style = {{margin: "auto", width: "100px", marginTop: "20px"}}>
            <div><h1><a href = "#" id = "switchcell"></a></h1></div>
          </div>
          
        </div>

      </div>
      
      {/* </div> */}
      
    </div>
  )
}

export default ContactInfo