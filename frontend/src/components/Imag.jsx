import React from 'react';
import Slider from 'react-slider';

import afrik1 from "../assets/images/afrik1.jpg";
import afrik2 from "../assets/images/afrik2.jpg";
import afrik3 from "../assets/images/afrik4.jpg";
import afrik4 from "../assets/images/afrik4.jpg";
import afrik5 from "../assets/images/afrik5.jpg"
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    'afrik11.jpg',
    'afrik2.jpg',
    'afrik3.jpg',
    'afrik4.jpg',
    'afrik5.jpg',
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
