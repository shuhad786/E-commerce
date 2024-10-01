import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './mainCarousel.css';

const carouselTemp = ({ images, accessModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  const renderCarouselItems = () => {
    return images.map((image, index) => (
      <div className="carousel-item" key={index}>
        {/* Rest of the carousel item contents */}
        <img
          className={`w-64 h-64 object-contain mx-auto ${
            activeIndex === index ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          src={image}
          alt={`Image ${index + 1}`}
        />
        <div className="flex w-64 mt-8 mb-4 justify-between items-center">
          <button
            className="h-min bg-transparent font-semibold"
            onClick={() => accessModal(index)}
          >
            <i className="fas fa-info-circle text-2xl text-slate-400 hover:text-emerald-400"></i>
          </button>
          <button className="p-2 h-min bg-neutral-300 font-semibold text-xs rounded-full items-center flex">
            <span className="ml-2 font-semibold text-sm hover:text-white">Add to Cart</span>
            <i className="fas fa-shopping-cart text-lg ml-2 text-slate-400 hover:text-white"></i>
          </button>
        </div>
      </div>
    ));
  };

  const sliderSettings = {
    dots: false,
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    beforeChange: (_, nextIndex) => handleCarouselChange(nextIndex),
  };

  return (
    <div className="relative group">
      <Slider {...sliderSettings}>{images && renderCarouselItems()}</Slider>
    </div>
  );
};

export default carouselTemp;
