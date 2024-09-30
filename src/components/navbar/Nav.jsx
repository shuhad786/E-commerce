import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from "../../redux/CartSlice";
import LogoFlower from '../../assets/logo-flower.png';
import "./nav.css";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item)); // Dispatch action to remove item from cart
  };

  const handleProceedToCheckout = () => {
    // Close the dropdown cart
    setIsDropdownOpen(false);
    // Navigate to the checkout page
    // (assuming you have set up the routing correctly)
    history.push('/checkout');
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <>
      <nav className='bg-neutral-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen px-10 py-4'>
          <a href='/' className='flex items-center'>
            <img
              src={LogoFlower}
              className='w-12 rounded-full mr-3 shadow-[0px_0px_10px_5px_#48BB78]'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap color2'>
              Bloomify
            </span>
          </a>
          <div className='flex items-center'>
            <a
              href='tel:5541251234'
              className='mr-6 text-sm color2 hover:underline hover:text-white'
            >
              (555) 412-1234
            </a>
            <Link to="/billingInfo" className='flex justify-evenly items-center w-36 text-sm color2 hover:underline hover:text-white'>
              <span className='hover:no-underline'>
                <i className="fa-solid fa-address-card"></i>
              </span>
              Billing Information
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bg-neutral-700">
        <div className="max-w-screen px-4 py-3">
          <div className="flex items-center justify-end">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a href="/" className="text-emerald-400 font-semibold hover:text-white hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="text-emerald-400 font-semibold hover:text-white hover:underline">Company</a>
              </li>
              <li>
                <a href="#" className="text-emerald-400 font-semibold hover:text-white hover:underline">Team</a>
              </li>
              <li className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="text-emerald-400 font-semibold hover:text-white hover:underline"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg shadow-neutral-500 rounded-br-md rounded-bl-md z-10">
                    <div className="p-4 border-b">
                      <h2 className="font-bold text-lg">Your Cart</h2>
                    </div>
                    <ul className="py-2">
                      {cartItems.length > 0 ? (
                        cartItems.map(item => (
                          <li key={item.id} className="flex justify-evenly items-center px-4 py-2 hover:bg-gray-200">
                            <img className='w-10' src={item.image} alt="" />
                            <span>{item.name}</span>
                            <span>R{item.price.toFixed(2)}</span>
                            <button className="text-red-500 hover:text-white hover:bg-red-700 hover:rounded-full hover:p-1.5" onClick={() => handleRemove(item)}>Remove</button>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-gray-500">Your cart is empty.</li>
                      )}
                     {cartItems.length > 0 && (
                      <div className="flex justify-between items-center p-4 border-t">
                        <Link to="/checkout">
                          <button className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                        </Link>
                        <span className="font-semibold">Total: R{totalPrice.toFixed(2)}</span>
                      </div>
                    )}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
