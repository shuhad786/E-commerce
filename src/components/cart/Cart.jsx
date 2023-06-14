import Headset from "../../assets/headset.jpg";
import "./cart.css";

const Cart = () => {
  return (
    <div className='p-10'>
      <div className='p-2 border border-solid border-slate-400 rounded-lg'>
        <h1 className='text-2xl font-bold'>Review Item And Shipping</h1>
        <div className='flex justify-between items-center p-5px'>
          <div className='flex items-center'>
            <img src={Headset} alt='headset' />
            <div>
              <h1 className='text-4xl font-bold mb-4'>Airpods- Max</h1>
              <h3 className='text-lg font-semibold'>Color: Pink</h3>
            </div>
          </div>
          <div className='flexRight'>
            <h3 className='font-bold'>$ 500</h3>
            <p>Quantity: 01</p>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h1 className='text-2xl font-bold'>Shipping Details</h1>
        <form>
          <span className='flex'>
            <label className='font-bold mr-16'>Full Name</label>
            <input type='text' placeholder='Full Name' />
          </span>
          <br />
          <span className='flex'>
            <label className='font-bold mr-16'>Address</label>
            <input type='text' placeholder='Address' />
          </span>
          <br />
          <label className='font-bold '>City</label>
          <input type='text' placeholder='City' />
          <br />
          <label className='font-bold '>Country</label>
          <input type='text' placeholder='Country' />
          <br />
          <label className='font-bold '>Zip Code</label>
          <input type='text' placeholder='Zip Code' />
          <br />
          <label className='font-bold '>Mobile</label>
          <input type='tel' placeholder='Mobile' />
          <br />
          <label htmlFor='email' className='font-bold '>
            Email
          </label>
          <input type='email' placeholder='Email' />
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
