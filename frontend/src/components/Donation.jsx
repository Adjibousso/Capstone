import React, { useState } from 'react';


const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const suggestedAmounts = [10, 20, 50, 100, 200];

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount when a suggested amount is selected
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null); // Clear selected suggested amount when custom input is used
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationAmount = selectedAmount || customAmount;
  
    if (!donationAmount || donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/donate', {
        amount: donationAmount,
      });
      console.log('Donation successful:', response.data);
    } catch (err) {
      console.error('Error processing donation:', err);
    }
  };
  

  return (
    <div className="donation-page">
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

      <button className="donate-button" onClick={handleSubmit}>
        Donate
      </button>
    </div>
  );
};

export default DonationPage;
