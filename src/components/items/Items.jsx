import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Items = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 mt-6">
        {items.map((item) => (
          <div
            className="flex flex-col items-center p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl"
            key={item.id}
          >
            <img
              className="rounded-xl w-60 h-56"
              src={item.image}
              alt={`Image ${item.id}`}
            />
            <div className="flex w-56 mt-8 mb-4 justify-between items-center">
              <button className="h-min bg-transparent font-semibold">
                <i className="fa-solid fa-circle-info text-2xl text-slate-400 hover:text-emerald-400"></i>
              </button>
              <Link to="/cart">
                <button className="p-2 w-36 ml-8 justify-between h-min shadow-inner bg-white rounded-full items-center flex transition-all duration-700 ease-out hover:text-white hover:ease-in hover:bg-gradient-to-t from-gray-700 via-gray-900 to-black">
                  <span className="ml-2 font-semibold text-sm">
                    Add to Cart
                  </span>
                  <i className="fa-solid fa-cart-shopping text-lg ml-2 text-slate-400 transition-colors hover:text-white"></i>
                </button>
              </Link>
            </div>
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500">${item.price}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
