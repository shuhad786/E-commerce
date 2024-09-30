// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { selectItem } from "../../redux/CartSlice";
// import Modal from "../../components/modal/Modal";

// const Items = () => {
//   const items = useSelector((state) => state.items.items);
//   const dispatch = useDispatch();

//   const [selectedItem, setSelectedItem] = useState(null);

//   const openModal = (item) => {
//     setSelectedItem(item);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };

//   const addToCart = (item) => {
//     dispatch(selectItem(item));
//     setSelectedItem(item); // Set the selected item in local state as well
//   };

//   return (
//     <div className="overscroll-y-none">
//       <div className="grid grid-cols-4 gap-6 mt-6">
//         {items.map((item) => (
//           <div
//             className="flex flex-col bg-slate-50 items-center p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl"
//             key={item.id}
//           >
//             <img
//               className="rounded-xl w-60 h-56"
//               src={item.image}
//               alt={`Image ${item.id}`}
//             />
//             <div className="flex w-40 mt-8 mb-4 justify-between items-center">
//               <button onClick={() => openModal(item)} className="h-min bg-transparent">
//                 <i className="fa-solid border-none rounded-full border-transparent hover:border-transparent text-2xl transistion-all duration-500 ease-out hover:ease-in hover:rounded-full text-slate-400 hover:shadow-[0_0_10px_#34d399] hover:bg-emerald-400 hover:text-white fa-circle-info"></i>
//               </button>
//               <Link to="/cart">
//                 <button onClick={() => addToCart(item)} className="p-2 w-32 ml-8 justify-between text-sm font-semibold h-min shadow-inner bg-white rounded-full items-center flex transition-all duration-300 ease-out hover:ease-in hover:text-emerald-400 hover:shadow-[0_0_22px_#34d399]">
//                   Add to Cart
//                   <i className="fa-solid ml-4 text-lg fa-cart-shopping"></i>
//                 </button>
//               </Link>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">{item.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedItem && <Modal selectedItem={selectedItem} closeModal={closeModal} />}
//     </div>
//   );
// };

// export default Items;

import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItem } from "../../redux/CartSlice";
import Modal from "../../components/modal/Modal";

const Items = () => {
  const items = useSelector((state) => state.items.items);
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // If the item is already in the cart, update the quantity
      dispatch(updateItemQuantity({ item, quantity: existingItem.quantity + 1 }));
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      dispatch(selectItem({ ...item, quantity: 1 }));
    }
  };

  return (
    <div id="home" className="overscroll-y-none">
      <div className="grid grid-cols-4 gap-6 mt-6">
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
            <div className="flex w-48 mt-8 mb-4 justify-between items-center">
              <button onClick={() => openModal(item)} className="h-min bg-transparent">
                <i className="fa-solid border-none rounded-full border-transparent hover:border-transparent text-2xl transistion-all duration-500 ease-out hover:ease-in hover:rounded-full text-slate-400 hover:shadow-[0_0_10px_#34d399] hover:bg-emerald-400 hover:text-white fa-circle-info"></i>
              </button>
              <button onClick={() => addToCart(item)} className="p-2 w-32 ml-8 justify-between text-sm font-semibold h-min shadow-inner bg-white rounded-full items-center flex transition-all duration-300 ease-out hover:ease-in hover:text-emerald-400 hover:shadow-[0_0_22px_#34d399]">
                Add to Cart
                <i className="fa-solid ml-4 text-lg fa-cart-shopping"></i>
              </button>
            </div>
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <Modal selectedItem={selectedItem} closeModal={closeModal} />}
    </div>
  );
};

export default Items;




