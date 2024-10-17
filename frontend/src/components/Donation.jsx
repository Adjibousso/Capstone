import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import '../App.css'

//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//  public key
const stripePromise = loadStripe('pk_test_51QAbfBHysijKhCFRUybB08h2IjVqnrwBGz59XudqsrpIq8Y0WhismjOM1MSLZgnJDfJ9FTuh6GO5fVT3t9hEyi2P00PdNCcYGn');

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const suggestedAmounts = [10, 20, 50, 100, 200];

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); 
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Clear selected suggested amount
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationAmount = selectedAmount || customAmount;

    if (!donationAmount || donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (!stripe || !elements) {
      
      return;
    }

    try {
      // Create a payment intent on the server
      const { data: clientSecret } = await axios.post('http://localhost:3000/api/donate', {
        amount: donationAmount * 100, 
      });

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert(result.error.message);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        console.log('Payment successful!');
        alert('Thank you for your donation!');
      }
    } catch (err) {
      console.error('Error processing donation:', err);
      alert('Error processing donation.');
    }
  };

  return (
    <div className="donationPage">
      <h2>Make a Donation</h2>
      <p>Select a suggested donation amount or enter your own:</p>

      <div className="suggested-amounts">
        {suggestedAmounts.map((amount) => (
          <button
            key={amount}
            className={`suggested-amount ${selectedAmount === amount ? 'selected' : ''}`}
            onClick={() => handleSelectAmount(amount)}
          >
            ${amount}
          </button>
        ))}
      </div>

      <div className="custom-amount">
        <label htmlFor="customAmount">Or enter a custom amount:</label>
        <input
          type="number"
          id="customAmount"
          placeholder="Enter amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="card-element">Card Details:</label>
        <CardElement id="card-element" />
        <button className="donate-button" type="submit">
          Donate ${selectedAmount || customAmount}
        </button>
      </form>
    </div>
  );
};


const DonationPageWrapper = () => (
  <Elements stripe={stripePromise}>
    <DonationPage />
  </Elements>
);

export default DonationPageWrapper;
