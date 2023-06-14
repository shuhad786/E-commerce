import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const CheckoutButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    // Call your backend API to create a Stripe session
    const response = await fetch('/create-session', { method: 'POST' });
    const session = await response.json();
    // Redirect the user to the Stripe Checkout page
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      // Handle error
      console.log(result.error);
    }
  };

  return (
    <button onClick={handleClick}>Checkout</button>
  );
};

export default CheckoutButton;
