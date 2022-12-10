import React from 'react'
import '../style/ContactUS.scss'
function ContactUS() {
  return (
    <div className='contact__page'>
       <h1>?רוצים להשאיר פרטים</h1>
       <p>?רוצים לבקר אותנו</p>
       <span id = "switchaddress"></span>
       <br />
       <span id = "switchcity"></span>
       <div className='line'></div>

<div className="container">
        <form action="https://backend.webittoday.com/send_email" method = "post" style = {{textAlign: "center"}}>

          <input type = "text" value = "" id = "switchmail" name = "recp" hidden />
          <input type = "text" value = {window.location.href} name = "location" hidden />
          <input type="text" id="fullname" name="fullname" placeholder="השם שלך" className = "contactitem"/>
          <br />
          <input type="text" id="email" name="email" placeholder="כתובת מייל" className = "contactitem"/>
          <br />
          <input type="text" id="subject" name="subject" placeholder="נושא הפנייה"  className = "contactitem"/>
          <br />
          <textarea id="message" className = "contactitem" name="message" placeholder="דבר איתנו" style={{height: '200px'}} defaultValue={""} />
          <br />
        <input type = "submit" className='doc__button' style = {{margin: "auto"}} value = "צרו קשר"/>
        </form>
      </div>


    </div>
  )
}

export default ContactUS