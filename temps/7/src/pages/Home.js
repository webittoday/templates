import React from 'react'
import logocenter from "../assets/plantshape.png"
import { ImPlay2 } from "react-icons/im"
import { BsPhone } from "react-icons/bs"
import { AiOutlineFlag, AiFillAppstore } from "react-icons/ai"
import { TfiFiles } from "react-icons/tfi"
import { BsTools } from "react-icons/bs"
import { RxDesktop } from "react-icons/rx"
import { SiBrandfolder } from "react-icons/si"
import { IoMdPhotos } from "react-icons/io"
import { SiPhotopea } from "react-icons/si"
import { FaTabletAlt } from "react-icons/fa"
import one from "../assets/1.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
import four from "../assets/four.jpg"
import five from "../assets/five.jpg"
import six from "../assets/six.jpg"
import seven from "../assets/seven.jpg"
import eight from "../assets/eight.jpg"

export default function Home() {
  return (
    <>

      <div className="HomeSectionOne">
    
        <div className="first">
          <div>

          <h2><i>Hello We, are York</i></h2>
          <h1>Amazing and creative bussines solutions!</h1>
          <button>read more</button>
          </div>
        </div>
      </div>
      <div className="HomeSectionTwo">
        <div>
          <img src={logocenter} alt="" />
          <h1>We Are York, We Provide Highly Creative Works & Design Awesome Stuff!</h1>
          <hr />
          <hr />
          <h4>We are York agency, our strategists will help you set an objective and choose your tools, developing a
            plan that is custom built for your business. We make sure to provides unlimited collection of options,
            elements & creative shortcode lists. All York elements can be easily styled, edited and modified in
            little easy steps to save your time!</h4>
        </div>
      </div>
      <div className="HomeSectionthree">
        <div className="divOne">
          <a href="https://www.youtube.com/watch?v=TKnufs85hXk" target="_blank">

            <button><ImPlay2 size="30px" /></button>
          </a>
        </div>
        <div className="divTwo">
          <div>

            <hr />
            <hr />
            <h1>Imagine & Create,
              We Make It So Simple!</h1>
            <h3>After all, as described in Web Design Trends, vision dominates a lot of our subconscious
              interpretation of the world around us. On top it, pleasing images create a better user experience.
              Rounding up a bunch of specific designs and talking about the merits of each is the perfect way!
            </h3>
            <button>read more</button>
          </div>
        </div>
      </div>

      <div className="HomeSectionFour">
        <div className="cards">
          <div className="card one">
            <span>

              <BsPhone size="80px" />
              <h3>Fully Responsive</h3>
              <h5>Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.</h5>
            </span>
          </div>
          <div className="card two">
            <span>
              <AiOutlineFlag size="80px" />
              <h3>Free Updates</h3>
              <h5>Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.</h5>
            </span>
          </div>
          <div className="card three">
            <span>
              <TfiFiles size="80px" />
              <h3>Powerful Features</h3>
              <h5>You will get a lifetime free updates, which may contain various theme improvements, fixes for any bugs or theme issues, security updates or new awesome demos.</h5>
            </span>
          </div>
          <div className="card four">
            <span>
              < BsTools size="80px" />
              <h3>Friendly Support</h3>
              <h5>Our aim is the satisfaction of customers. If you have any questions, or need help with, just contact us and our support team and developers will immediately help you.</h5>
            </span>
          </div>

        </div>
      </div>

      <div className="HomeSectionFive">
        <div>
          <h1>Best Business Solutions</h1>
          <p>We are York, our strategists will help you set an objective and choose your tools, developing a plan that is custom-built for your business.</p>
        </div>
      </div>

      <div className="HomeSectionSix">
        <div className="cards">
          <div className="card one">
            <span>
              <RxDesktop size="80px" className='icon' />
              <h2>Development</h2>
              <p>The development of your next business plan will be executed by a brilliant team who will indicate your grand success.</p>
            </span>
          </div>
          <div className="card two">
            <span>
              <AiFillAppstore size="80px" className='icon' />
              <h2>Web Design</h2>
              <p>What separates York agency from all other web design agencies is the ability to offer the most User Friendly Experience.</p>
            </span>
          </div>
          <div className="card three">
            <span>
              <SiBrandfolder size="80px" className='icon' />
              <h2>Brand Identity</h2>
              <p>Your logo is the very heart of identity, let our designers deliver the perfect dreamy design for your new business identity.</p>
            </span>
          </div>
        </div>
      </div>

      <div className="HomeSectionSeven">
        <div className="cards">
          <div className="card one">
            <span>
              <IoMdPhotos size="80px" className='icon' />
              <h2>Photography</h2>
              <p>Photography is the core of everything we do, photography equipment, camera and reviews, photography articles.</p>
            </span>
          </div>
          <div className="card two">
            <span>
              <SiPhotopea size="80px" className='icon' />
              <h2>Graphic Design</h2>
              <p>Graphic design is the process of visual and problem-solving using one or more of typography, photography and illustration.</p>
            </span>
          </div>
          <div className="card three">
            <span>
              <FaTabletAlt size="80px" className='icon' />
              <h2>Mobile Apps</h2>
              <p>
                Increase social reach and productivity with our Awesome App Directory, with a big collection of famous applications..
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="HomeGallery">
        <span>

          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />

        </span>
      </div>

      <div className="HomeGallery">
        <span>

          <img src={five} alt="" />
          <img src={six} alt="" />
          <img src={seven} alt="" />
          <img src={eight} alt="" />

        </span>
      </div>

      <div className="HomeContact">
        <div className="cards">
          <div className="card one">
            <span>

              <h1>Need Help?!!</h1>
              <h2>Don’t Hesitate To Ask</h2>
            </span>
          </div>
          <div className="card two">
            <span>
              <h1>Write To Us</h1>

              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" class="form__field" type="input" />
                <label class="form__label" for="name">Name</label>
              </div>
              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" class="form__field" type="input" />
                <label class="form__label" for="name">Email</label>
              </div>
              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" class="form__field" type="input" />
                <label class="form__label" for="name">Phone Number</label>
              </div>
              <div class="form__group field" style={{ marginLeft: "40px" }}>
                <input required="" placeholder="Name" class="form__field" type="input" />
                <label class="form__label" for="name">Message</label>
              </div>
              <div>

                <button>Send Message</button>
              </div>
            </span>
          </div>

        </div>
      </div>

    </>
  )
}