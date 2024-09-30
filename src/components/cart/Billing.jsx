import React, { useState } from "react";

export const BillingInformation = () => {

  // State to hold billing information
  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    address: '',
    mobile: '',
    email: '',
    comments: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value
    });
  };

  return (
    <div className='mt-10 p-10 shadow-lg rounded-xl shadow-gray-300'>
      <h1 className='text-4xl font-bold text-center'>Shipping Details</h1>
      <form className="mt-16 flex flex-col justify-evenly">
        <div className="flex items-start">
          <input
            className="p-2 w-1/4 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
            type='text'
            name='fullName'
            placeholder='Full Name'
            value={billingInfo.fullName}
            onChange={handleChange}
          />
          <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
        </div>
        <br />
        <div className="flex items-start">
          <input
            className="p-2 w-11/12 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
            type='text'
            name='address'
            placeholder='Address'
            value={billingInfo.address}
            onChange={handleChange}
          />
          <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
        </div>
        <br />
        <div className="flex items-start">
          <input
            className="p-2 w-1/6 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
            type='tel'
            name='mobile'
            placeholder='Mobile'
            value={billingInfo.mobile}
            onChange={handleChange}
          />
        <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
        </div>
        <br />
        <div className="flex items-start">
          <input
            className="p-2 w-1/3 rounded-md shadow-inner shadow-gray-300 hover:shadow-[inset_0px_0px_12px_rgba(56,189,248,0.5)] transition hover:ease-in-out duration-300"
            type='email'
            name='email'
            placeholder='Email'
            value={billingInfo.email}
            onChange={handleChange}
          />
          <div className="text-red-600 font-semibold text-xl ml-1 mt-0.1">*</div>
        </div>
      </form>
    </div>
  );
};
