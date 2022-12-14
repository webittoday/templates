import React from 'react'
import "../style/contact.scss"

function Conatctus() {
  return (

    // there is contact section
    <div className="Contact" id='contact'>
      <div className="cards">
        <div className="card one">
          <span>

            <h1>Need Help?!!</h1>
            <h2>Don’t Hesitate To Ask</h2>
          </span>
        </div>

        {/* in this card section we write the form code for contact */}
        <div className="card two">
          <span>
            <div className='feild'>
              <h1>Write To Us</h1>

              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Name</label>
              </div>
              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Email</label>
              </div>
              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Phone Number</label>
              </div>
              <div className="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" className="form__field" type="input" />
                <label className="form__label" htmlFor="name">Message</label>
              </div>
              <div>
                {/* this is form button */}
                <button>Send Message</button>
              </div>
            </div>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Conatctus