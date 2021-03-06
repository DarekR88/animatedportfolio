import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './Carousel.css';
import ImageGallery from 'react-image-gallery';
import img1 from '../../static/images/responsive-image.jpg';
import img2 from '../../static/images/react-logo-large.jpg';
import img3 from '../../static/images/learning-image-large.jpg';

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
        <ImageGallery items={images} autoPlay={true} showBullets={true} slideDuration={600} />
      </div>
    );
}

export default Carousel;