import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
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

  // const imageList = images.map((img, i) => {
  //   return (
  //     <img key={`image-${i}`} src={img.original} className="c-image" />
  //   )
  // });

  return (
      <div className="Carousel">
        <ImageGallery items={images} />
      </div>
    );
}

export default Carousel;