import Slider from 'react-slick';

import './slick.css';
import './slick-theme.css';

export const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="left">
            <img src="assets/311181228.jpg" alt="avatar1" />
          </div>
          <div className="left">
            <img src="assets/311236006.jpg" alt="avatar2" />
          </div>
          <div className="left">
            <img src="assets/311250387.jpg" alt="avatar3"/>
          </div>
          <div className="left">
            <img src="assets/312558817.jpg" alt="avatar4" />
          </div>
        </Slider>
        <button className="bg-red-400 w-36 h-16 top-96 left-110">all position</button>
      </div>
    </>
  );
};