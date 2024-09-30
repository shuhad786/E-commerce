import React from "react";
import { useSelector } from 'react-redux';
import { payfastConfig } from '../../payfast/payfastconfig';

function CheckOut() {
  const cartItems = useSelector((state) => state.cart.items); // Get all items in the cart

  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  const handlePayment = () => {
    const paymentData = {
      merchant_id: payfastConfig.merchant_id,
      merchant_key: payfastConfig.merchant_key,
      return_url: payfastConfig.return_url,
      cancel_url: payfastConfig.cancel_url,
      notify_url: payfastConfig.notify_url,
      amount: totalPrice.toFixed(2), // Total amount to be paid
      item_name: 'Checkout Items', // You can customize this
      // Add any other necessary fields
    };

    // Create a query string from the payment data
    const queryString = new URLSearchParams(paymentData).toString();
    
    // Redirect to PayFast
    window.open(`https://sandbox.payfast.co.za/eng/process?${queryString}`, '_blank');
  };

  return (
    <div className='p-10'>
      <div className='p-2 shadow-lg rounded-xl shadow-gray-300'>
        <h1 className='text-5xl font-bold text-center'>Review Items And Shipping</h1>
        <span className="flex justify-center mt-10">
          <hr className="w-3/4 h-[3px] bg-neutral-200 rounded-2xl"/>
        </span>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} className='flex justify-between items-center mt-12 p-4'>
              <img className="w-32" src={item.image} alt={item.title} />
              <div className="shadow-inner shadow-neutral-400 p-3 rounded-xl w-10/12">
                <p className='text-xl font-bold mb-4'>{item.title}</p>
                <p className='text-sm font-semibold mb-4 text-pretty'>{item.description}</p>
                <p className='font-bold text-sm mb-4'>Price: R{item.price}</p>
                <p className='font-bold text-sm'>In stock: {item.rating.count}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-lg'>Your cart is empty.</p>
        )}
        <div className="flex flex-col justify-between ml-10 mt-20">
          <hr className="w-3/4 h-[3px] bg-neutral-200 rounded-2xl mx-auto"/>
          {cartItems.length > 0 && (
            <span className="font-bold text-xl my-4">Total: R{totalPrice.toFixed(2)}</span>
          )}
          <button className="p-1 mb-5 w-40 font-semibold text-lg text-emerald-500 border-2 border-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white hover:border-transparent transition ease-in-out duration-150" onClick={handlePayment}>Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;