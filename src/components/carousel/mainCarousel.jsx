import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './mainCarousel.css';

const MyCarousel = ({ images, accessModal }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Define activeIndex state

  const handleCarouselChange = (index) => {
    setActiveIndex(index); // Update activeIndex on carousel change
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={`carousel-indicator ${isSelected ? 'active' : ''}`}
      >
        <span className="sr-only">{label}</span>
      </button>
    );
  };

  return (
    <div className="relative group">
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-arrow left hidden bg-transparent group-hover:block"
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-arrow right hidden bg-transparent group-hover:block"
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 5 }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )
        }
        renderIndicator={renderIndicator} // Use the custom renderIndicator function
        selectedItem={activeIndex} // Pass the activeIndex to the Carousel component
        onChange={handleCarouselChange} // Handle the carousel change event
      >
        {images.map((image, index) => (
          <div className="carousel-item bg-white p-8 flex flex-col items-center" key={index}>
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
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
