import React from "react";
import './Carousel.css';
import ImageGallery from 'react-image-gallery';
import img1 from '../../static/images/img1.png';
import img2 from '../../static/images/img2.png';
import img3 from '../../static/images/img3.png';

const images = [
  {
    original: img1,
  },
  {
    original: img2,
  },
  {
    original: img3,
  },
];

const Carousel = () => {
    return (
        <div className="Carousel">
          <ImageGallery items={images} />
        </div>
      );
}

export default Carousel;