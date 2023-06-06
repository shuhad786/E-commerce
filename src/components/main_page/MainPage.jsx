import React, { useState } from 'react';
import Modal from '../modal/Modal';
import Sale from '../../assets/sale-main-image.png';
import Test from '../../assets/test-image.jpg';
import './main.css';

function MainPage() {
  const imageList = [Test, Test, Test, Test, Test, Test, Test, Test, Test];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => {
    setActiveModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveModalIndex(null);
    setIsModalOpen(false);
  };

  return (
    <div id="main" className="px-4 overscroll-x-none">
      <div className="mb-20 mt-10 w-full h-60 bg-slate-200">
        <img id="main-image" className="w-20 h-20 mb-4" src={Sale} alt="sale image" />
        <h2 className="ml-36">Check out <br /> our sale now</h2>
      </div>
      <div className="flex w-3/5 justify-evenly">
        <button className="px-4 py-2 mr-2 bg-slate-300 font-semibold rounded-full hover:bg-teal-300">Men's Clothing <i className="fa-solid fa-angle-down ml-1"></i></button>
        <button className="px-4 py-2 mr-2 bg-slate-300 font-semibold rounded-full hover:bg-teal-300">Women's Clothing <i className="fa-solid fa-angle-down ml-1"></i></button>
        <button className="px-4 px-4 py-2 mr-2 bg-slate-300 font-semibold rounded-full hover:bg-teal-300">Jewellery <i className="fa-solid fa-angle-down ml-1"></i></button>
        <button className="px-4 py-2 mr-2 bg-slate-300 font-semibold rounded-full hover:bg-teal-300">Electronics <i className="fa-solid fa-angle-down ml-1"></i></button>
      </div>
      
      {/* Modal code below */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {imageList.map((image, index) => (
          <div className="flex bg-white border-red-600 border-solid border-2" key={index}>
            <img className="w-64 h-56" src={image} alt={`Image ${index + 1}`} />
            {/* <div className="flex w-40 mt-8 mb-4 justify-between items-center">
              <button
                className="h-min bg-transparent font-semibold"
                onClick={() => openModal(index)}
              >
                <i className="fa-solid fa-circle-info text-2xl text-slate-400 hover:text-emerald-400"></i>
              </button>
              <button className="p-2 h-min bg-slate-200 font-semibold text-xs rounded-full items-center flex">
                <span className="ml-2">Add to Cart</span>
                <i className="fa-solid fa-cart-shopping text-lg ml-2 text-slate-400"></i>
              </button>
            </div> */}
          </div>
        ))}
      </div>
      {isModalOpen && activeModalIndex !== null && (
        <Modal closeModal={closeModal} />
      )}
    </div>
  );
}

export default MainPage;
