import React from 'react';
import Carousel from '../carousel/mainCarousel';
// import Temp from '../carousel/carouselTemp';
import Card from '../items/Card';
import Sale from '../../assets/sale-main-image.png';
import Special from '../../assets/headset.jpg';
import './main.css';

function MainPage() {
  return (
    <div id="main" className="px-4 overscroll-x-none overscroll-y-none">
      <div className="flex rounded-xl mb-20 mt-10 w-full h-auto bg-slate-200">
        <img id="main-image" className="w-24 h-24 mb-4" src={Sale} alt="sale image" />
        <div className='flex justify-between items-center w-10/12 p-4'>
          <p className="ml-36 font-bold text-4xl text-emerald-400">Check out <br /> our sale now</p>
          <div className='flex flex-col items-center justify-center'>
            <img className="w-56 h-44 rounded-xl" src={Special} alt="special image" />
            <p className='text-lg font-semibold text-red-600 mt-8'>15% off while stocks last</p>
          </div>
        </div>
      </div>
      <Card />
      <div className="mt-16">
        <h2 className="text-emerald-400 text-3xl font-bold">Similar Items You May Like</h2>
        <Carousel />
        {/* <Temp images={imageList} accessModal={openModal} /> */}
        
      </div>
    </div>
  );
}

export default MainPage;
