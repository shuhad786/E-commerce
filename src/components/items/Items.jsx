import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";

const Items = () => {
  const items = useSelector((state) => state.items.items);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 mt-6">
        {items.map((item) => (
          <div
            className="flex flex-col bg-slate-50 items-center p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl"
            key={item.id}
          >
            <img
              className="rounded-xl w-60 h-56"
              src={item.image}
              alt={`Image ${item.id}`}
            />
            <div className="flex w-56 mt-8 mb-4 justify-between items-center">
              <button onClick={openModal} className="h-min bg-transparent">
                <i className="fa-solid text-2xl transistion-all duration-500 ease-out hover:ease-in hover:ease-in hover:rounded-full text-slate-400 hover:shadow-[0px_0px_30px_10px_#48BB78] hover:bg-gradient-to-t from-gray-700 via-gray-900 to-black hover:text-white fa-circle-info"></i>
              </button>
              {isModalOpen && <Modal closeModal={closeModal} />}
              <Link to="/cart">
                <button className="p-2 w-36 ml-8 justify-between text-sm font-semibold h-min shadow-inner bg-white rounded-full items-center flex transition-all duration-500 ease-out hover:text-white hover:ease-in hover:bg-gradient-to-t from-gray-700 via-gray-900 to-black hover:shadow-[0px_0px_30px_10px_#48BB78]">
                    Add to Cart
                  <i className="fa-solid ml-4 text-lg fa-cart-shopping"></i>
                </button>
              </Link>
            </div>
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
