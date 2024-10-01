// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateItemQuantity } from "../../redux/CartSlice";
// import { useNavigate, Link } from 'react-router-dom';

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleRemove = (item) => {
//     dispatch(removeItem(item)); // Dispatch action to remove item from cart
//   };

//   const handleQuantityChange = (item, quantity) => {
//     dispatch(updateItemQuantity({ item, quantity })); // Dispatch action to update item quantity
//   };

//   const handleCheckout = () => {
//     navigate('/cart/Billing'); // Navigate to the checkout page
//   };

//   return (
//     <div className='p-10'>
//       <div className='p-2 shadow-lg rounded-xl shadow-gray-300'>
//         <h1 className='text-5xl font-bold text-center'>Review Items And Shipping</h1>
//         <span className="flex justify-center mt-10">
//           <hr className="w-3/4 h-[3px] bg-neutral-200 rounded-2xl"/>
//         </span>
//         {cartItems.length === 0 ? (
//           <p className="text-center mt-4">Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className='flex justify-between items-center mt-12 p-4'>
//               <img className="w-64" src={item.image} alt={item.title}/>
//               <div className="ml-10 shadow-inner shadow-neutral-400 p-3 rounded-xl">
//                 <h1 className='text-3xl font-bold mb-4'>{item.title}</h1>
//                 <h3 className='text-md font-semibold mb-4'>{item.description}</h3>
//                 <h3 className='font-bold text-lg mb-4'>Price: R{item.price}</h3>
//                 <p className='w-32 font-bold text-lg'>Quantity: {item.quantity}</p>
//                 <div className="flex justify-between items-center">
//                   <button 
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => handleRemove(item)}
//                   >
//                     Remove
//                   </button>
//                   <div className="flex items-center">
//                     <button
//                       className="text-gray-500 hover:text-gray-700"
//                       onClick={() => handleQuantityChange(item, item.quantity - 1)}
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.quantity}</span>
//                     <button
//                       className="text-gray-500 hover:text-gray-700"
//                       onClick={() => handleQuantityChange(item, item.quantity + 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//         <div className="flex justify-end mt-8">
//           <Link to="/Billing">
//             <button
//               className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from "../../redux/CartSlice";
import { useNavigate, Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (item) => {
    dispatch(removeItem(item)); // Dispatch action to remove item from cart
  };

  const handleQuantityChange = (item, quantity) => {
    dispatch(updateItemQuantity({ item, quantity })); // Dispatch action to update item quantity
  };

  const handleCheckout = () => {
    navigate('/cart/Billing'); // Navigate to the checkout page
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice(); // Get the total price

  return (
    <div className='p-10'>
      <div className='p-2 shadow-lg rounded-xl shadow-gray-300'>
        <h1 className='text-5xl font-bold text-center'>Review Items And Shipping</h1>
        <span className="flex justify-center mt-10">
          <hr className="w-3/4 h-[3px] bg-neutral-200 rounded-2xl"/>
        </span>
        {cartItems.length === 0 ? (
          <p className="text-center mt-4">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className='flex justify-between items-center mt-12 p-4'>
              <img className="w-64" src={item.image} alt={item.title}/>
              <div className="ml-10 shadow-inner shadow-neutral-400 p-3 rounded-xl">
                <h1 className='text-3xl font-bold mb-4'>title: {item.title}</h1>
                <h3 className='text-md font-semibold mb-4'>{item.description}</h3>
                <h3 className='font-bold text-lg mb-4'>price: R{item.price}</h3>
                <p className='w-32 font-bold text-lg'>Quantity: {item.quantity}</p>
                <div className="flex justify-between items-center">
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                  <div className="flex items-center">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {/* Display total price */}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mt-8">
            <h2 className="text-2xl font-bold">Total Price: R{totalPrice.toFixed(2)}</h2>
          </div>
        )}
        <div className="flex justify-end mt-8">
          <Link to="/cart/Billing">
            <button
              className="bg-emerald-500 text-white px-6 py-2 rounded-md hover:bg-emerald-600" 
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
