import React from "react";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../static/images/img1.png';
import img2 from '../../static/images/img2.png';
import img3 from '../../static/images/img3.png';

const Carousel = () => {
    return (
        <div className="carouselContainer">
          <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
          </Carousel>
        </div>
      );
}

export default Carousel;