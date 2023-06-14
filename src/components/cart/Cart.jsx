import Headset from "../../assets/headset.jpg";

function Cart() {
  return (
    <div className='p-10'>
      <div className='p-2 shadow-lg rounded-xl shadow-gray-300'>
        <h1 className='text-5xl font-bold text-center'>Review Item And Shipping</h1>
        <div className='flex justify-between items-center mt-12'>
          <div className='flex items-center '>
            <img className="w-1/3" src={Headset} alt='headset'/>
            <div>
              <h1 className='text-3xl font-bold mb-4'>Airpods- Max</h1>
              <h3 className='text-md font-semibold'>Color: Pink</h3>
            </div>
          </div>
          <div className="mr-20">
            <h3 className='font-bold text-lg'>$ 500</h3>
            <p className='w-32 font-bold text-lg'>Quantity: 01</p>
          </div>
        </div>
      </div>

      <div className='mt-10 p-10 shadow-lg rounded-xl shadow-gray-300'>
        <h1 className='text-4xl font-bold text-center'>Shipping Details</h1>
        <form className="mt-16">
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label className='font-bold mr-16'>Full Name</label>
            <input className="pl-2 px-2 rounded-xl shadow-inner shadow-gray-300" type='text' placeholder='Full Name' />
          </span>
          <br />
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label className='font-bold mr-16'>Address</label>
            <input className="px-2 rounded-xl shadow-inner shadow-gray-300" type='text' placeholder='Address' />
          </span>
          <br />
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label className='font-bold '>City</label>
            <input className="px-2 rounded-xl shadow-inner shadow-gray-300" type='text' placeholder='City' />
          </span>
          <br />
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label className='font-bold'>Country</label>
            <input className="px-2 rounded-xl shadow-inner shadow-gray-300" type='text' placeholder='Country' />
          <br />
          </span>
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label className='font-bold'>Zip Code</label>
            <input className="px-2 rounded-xl shadow-inner shadow-gray-300" type='text' placeholder='Zip Code' />
          <br />
          </span>
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label className='font-bold'>Mobile</label>
            <input className="px-2 rounded-xl shadow-inner shadow-gray-300" type='tel' placeholder='Mobile' />
          </span>
          <br />
          <span className='grid grid-cols-2 w-96 mt-4'>
            <label htmlFor='email' className='font-bold '>Email</label>
            <input className="px-2 rounded-xl shadow-inner shadow-gray-300" type='email' placeholder='Email' />
          </span>
        </form>
      </div>

      <div className='side'>
        <h1>Order Summary</h1>
        <div className='side1'>
          <input type='text' name='' id='' />
        </div>

        <h2>Payment Details</h2>
      </div>
    </div>
  );
};

export default Cart;
