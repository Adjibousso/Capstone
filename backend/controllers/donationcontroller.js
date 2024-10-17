// /controllers/donationController.js

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

// Create a payment intent for donations
const createDonation = async (req, res) => {
  const { amount } = req.body;

  try {
    // Create a PaymentIntent with the amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, 
      currency: 'usd',
    });

    // Send the client secret to the frontend
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createDonation };
