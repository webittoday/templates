import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
const slider1 = SLIDERURL[0];
const slider2 = SLIDERURL[1];

class Slider extends Component{
	render(){
		return(
			<div className="main-slider">
				<Carousel indicators={false}>
					<Carousel.Item>
						<div className="slide" style={{ backgroundImage: "url("+ slider1 +")"}} >
							{/* <img className="d-block w-100 slider" src={require('./../../images/main-slider/slide1.jpg')}	alt="Second slide"	/> */}
							<div className="content">
								<span>INSERTTYPE</span>
								<h2 className="title">INSERTNAME</h2>
								<h4 className="sub-title">INSERTSLOGAN</h4>
								<Link to={"/about-1"} className="btn btnhover">אודות</Link>
								<Link to={'/contact-1'} className="btn white" data-toggle="modal" data-target="#exampleModal">צרו קשר</Link>
							</div>	
						</div>	
					</Carousel.Item>
					<Carousel.Item>
						<div className="slide" style={{ backgroundImage: "url("+ slider2 +")"}} >
							{/* <img className="d-block w-100 slider"	src={require('./../../images/main-slider/slide2.jpg')}	alt="Second slide"	/> */}
							<div className="content">
								<span>INSERTTYPE</span>
								<h4 className="sub-title">INSERTSLOGAN</h4>
								<Link to={"/about-1"} className="btn btnhover">אודות</Link>
								<Link to={'/contact-1'} className="btn white" data-toggle="modal" data-target="#exampleModal">צרו קשר</Link>
							</div>	
						</div>	
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}	
}

export default Slider;