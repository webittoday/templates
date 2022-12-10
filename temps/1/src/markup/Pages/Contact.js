import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';


var bgimg1 = SLIDERURL[0];
// var bgimg2 = require('./../../images/background/bg5.jpg');

class Contact extends Component{
	
	render(){
		return(
			<>
			{/* <Header /> */}
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage: "url(" + bgimg1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">צרו קשר</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>צרו קשר</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner-2 contact-form bg-white" style={{ backgroundSize:"100%" }}>
						<div className="container">
							<div className="row">
								<div className="col-xl-4 col-lg-6 col-md-6 d-flex m-md-b30 m-lg-b30">
									<div className="p-a30 border contact-area border-1 align-self-stretch radius-sm bg-white">
										<h3 className="m-b5">פרטי תקשורת</h3>
										<ul className="no-margin">
											<li className="icon-bx-wraper left m-b30">
												<div className="icon-bx-xs border-1 text-primary"> <Link to={''} className="icon-cell"><i className="ti-location-pin"></i></Link> </div>
												<div className="icon-content">
													<h6 className="text-uppercase m-tb0 dlab-tilte">Address:</h6>
													<p>INSERTADDRESS</p>
												</div>
											</li>
											<li className="icon-bx-wraper left  m-b30">
												<div className="icon-bx-xs border-1 text-primary"> <Link to={''} className="icon-cell"><i className="ti-email"></i></Link> </div>
												<div className="icon-content">
													<h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
													<p>INSERTMAIL</p>
												</div>
											</li>
											<li className="icon-bx-wraper left">
												<div className="icon-bx-xs border-1 text-primary"><Link to={''} className="icon-cell"><i className="ti-mobile"></i></Link> </div>
												<div className="icon-content">
													<h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
													<p>INSERTCELL</p>
												</div>
											</li>
										</ul>
										<div className="m-t20">
											<ul className="dlab-social-icon dlab-social-icon-lg">
												<li><Link to={'INSERTFACEBOOK'} className="fa fa-facebook bg-primary mr-1"></Link></li>
												<li><Link to={'INSERTTWITTER'} className="fa fa-twitter bg-primary mr-1"></Link></li>
												<li><Link to={'INSERTLINKEDIN'} className="fa fa-linkedin bg-primary mr-1"></Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6 m-md-b30 m-lg-b30">
									<div className="p-a30 bg-gray clearfix radius-sm contact-form-box">
										<h3 className="m-b20">דברו איתנו</h3>
										<div className="dzFormMsg"></div>
										<form method="post" className="dzForm" action="script/contact.php">
										<input type="hidden" value="Contact" name="dzToDo" />
											<div className="row">
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group">
															<input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group"> 
															<input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Id" />
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group">
															<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group recaptcha-bx">
														<div className="input-group">
															<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
															<input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" />
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" value="Submit" className="btn btnhover"> <span>שלח</span> </button>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="col-xl-4 col-lg-12 d-flex">
									<GoogleMaps
										apiKey={"AIzaSyBbHk3eFodSk_DSGzv8dd_dIJpZvVDyg4s "}
										style={{ height: "500px", width: "100%" }}
										zoom={6}
										center={{ lat: 37.4224764, lng: -122.0842499 }}
										markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			</>
		)
	}	
}


export default Contact;