import Headset from "../../assets/headset.jpg";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <div className=''>
        <h1 className='text-2xl font-bold'>Review Item And Shipping</h1>
        <div className='flex justify-between items-center p-5px'>
          <div className='flex justify-between items-center'>
            <img src={Headset} alt='headset' />
            <div>
              <h1 className='text-2l font-bold'>Airpods- Max</h1>
              <h3>Color: Pink</h3>
            </div>
          </div>
          <div className='flexRight'>
            <h3 className='font-bold'>$ 500</h3>
            <p>Quantity: 01</p>
          </div>
        </div>
      </div>

      <div className=''>
        <h1 className='text-2l font-bold'>Shipping Address</h1>
        <form>
          <label className='font-bold'>Full Name</label>
          <input type='text' placeholder='Full Name' />
          <br />
          <label className='font-bold '>Address</label>
          <input type='text' placeholder='Address' />
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
          <label htmlFor='email' className='font-bold '>Email</label>
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
