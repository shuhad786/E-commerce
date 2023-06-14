import React, { useEffect } from 'react';

const PaymentForm = () => {
  useEffect(() => {
    const stripe = window.Stripe('YOUR_PUBLISHABLE_KEY');

    const handleSubmit = async (event) => {
      event.preventDefault();

      const { error, token } = await stripe.createToken('card', {
        name: 'John Doe',
        address: {
          line1: '123 Street',
          city: 'City',
          state: 'State',
          postal_code: '12345',
          country: 'Country',
        },
      });

      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Token:', token);
        // Submit the token to your server or use it as needed
      }
    };

    const form = document.getElementById('payment-form');
    form.addEventListener('submit', handleSubmit);
  }, []);

  return (
    <form id="payment-form">
      {/* Payment form fields */}
      {/* Submit button */}
    </form>
  );
};

export default PaymentForm;
