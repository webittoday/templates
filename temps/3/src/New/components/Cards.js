import React from 'react'
import '../style/cards.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [];
const raw_images = GALLERY;

for (const image of raw_images)
{

  images.push(<div><img src={image} /></div>);

}


class Cards extends React.Component {
  render() {
      return (
          <center>
          <div>
              <h2>גלריה</h2>
              <br />
              <Carousel autoPlay interval="5000" transitionTime="1000" showThumbs={false} width = {"80%"} dynamicHeight={true}>
                  {images}
              </Carousel>
          </div>
          </center>
      )
  };
}

export default Cards;