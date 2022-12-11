import React from 'react'
import '../style/testimonial.scss'
import  img from '../images/logo.png'
function Testimonial() {
  return (

    <div className="test">
    <h2>Testimonials</h2>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>   
      <div className="carousel-inner">		
        <div className="carousel-item active">
          <div className="img-box"><img src={img} alt="" /></div>
          <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
          <p className="overview"><b>Michael Holz</b>Seo Analyst at <a href="#">OsCorp Tech.</a></p>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star-o" /></li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-box"><img src={img} alt="" /></div>
          <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
          <p className="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star-o" /></li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-box"><img src={img} alt="" /></div>
          <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
          <p className="overview"><b>Antonio Moreno</b>Web Developer at <a href="#">Circle Ltd.</a></p>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star" /></li>
              <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
            </ul>
          </div>
        </div>		
      </div>
      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <i className="fa fa-angle-left" />
      </a>
      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
        <i className="fa fa-angle-right" />
      </a>
    </div>
  </div>

  )
}

export default Testimonial