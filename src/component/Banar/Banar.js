import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import images from './images/image-1.jpg'
import images1 from './images/image-2.jpg'
import images2 from './images/image-3.jpg'
import images3 from './images/iphone-11.jpg'

const Banar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images2}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images3}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "500px"}}
            src={images1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banar;