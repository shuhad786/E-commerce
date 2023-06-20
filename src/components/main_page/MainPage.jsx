import React from 'react';
// import Carousel from '../carousel/mainCarousel';
// import Temp from '../carousel/carouselTemp';
import Card from '../items/Card';
import Sale from '../../assets/sale-main-image.png';
import './main.css';

function MainPage() {
  return (
    <div id="main" className="px-4 overscroll-x-none">
      <div className="mb-20 mt-10 w-full h-60 bg-slate-200">
        <img id="main-image" className="w-20 h-20 mb-4" src={Sale} alt="sale image" />
        <h2 className="ml-36">Check out <br /> our sale now</h2>
      </div>
      <Card />
      <div className="mt-16">
        <h2 className="text-emerald-400 text-3xl font-bold">Similar Items You May Like</h2>
        {/* <Carousel images={imageList} accessModal={openModal}/> */}
        {/* <Temp images={imageList} accessModal={openModal} /> */}
        
      </div>
    </div>
  );
}

export default MainPage;
