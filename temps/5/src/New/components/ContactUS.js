import React from "react";
import "../style/ContactUS.scss";
import { AiOutlineRight } from "react-icons/ai";
function ContactUS() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("contactHeader").innerHTML = "INSERTCONTACTHEADER";
    document.getElementById("contactSubHeader").innerHTML = "INSERTCONTACTPARA";
    document.getElementById("address").innerHTML = "INSERTEDDRESS";
    document.getElementById("phone").innerHTML = "INSERTPHOME";
    document.getElementById("email").innerHTML = "INSERTEMAIL";
    document.getElementById("Website").innerHTML = "INSERTWEB";
    document.getElementById("EMAILADDRESS").innerHTML = "INSERTEMAILADDRESS";
    document.getElementById("MESSAGE").innerHTML = "INSERTMESSAGE";
    document.getElementById("GetStartedButton").innerHTML =
      "INSERTGETSTARTEDBUTTON";
    document.getElementById("fullName").innerHTML = "INSERTFULLNAME";
  }, []);

  const PICTURES = GALLERYCONTACT;

  return (
    <div className="contact__back">
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-6 text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="heading-section" id="contactHeader">
                Book An Appointment
              </h2>
              <p className="heading__para" id="contactSubHeader">
                Quis autem velis ets reprehender nets quiste voluptate.
              </p>
            </div>
          </div>
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker" />
                      </div>
                      <div className="text">
                        <p id="address">
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920" id="phone">
                            + 1235 2355 98
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com" id="email">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Website</span>{" "}
                          <a href="#" id="Website">
                            yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row no-gutters"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contact US</h3>
                      <div id="form-message-warning" className="mb-4" />
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="label"
                                htmlFor="name"
                                id="fullName"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="label"
                                htmlFor="email"
                                id="EMAILADDRESS"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                className="label"
                                htmlFor="subject"
                                id="SUBJECT"
                              >
                                Subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#" id="MESSAGE">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={4}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="top__text__button contact__us__button">
                              <p></p>
                              <div
                                className="navbar__start__button contact__button"
                                id="GetStartedButton "
                              >
                                Get Started
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div
                      className="info-wrap w-100 p-5 img"
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1631258961148-a075ef009251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dG8lMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUS;
