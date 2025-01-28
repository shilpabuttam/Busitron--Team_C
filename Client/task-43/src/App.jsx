import React, { useState } from 'react';
import './App.css';
import StripePayment from './Component/PaymentForm';
import PayPalPayment from './Component/PayPalButton';
import RazorpayPayment from './Component/RazorpayPayment';


const App = () => {
  const [selectedGateway, setSelectedGateway] = useState('stripe');  // Default to Stripe

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Premium Subscription Payment</h1>
      </header>
      <div className="payment-gateway-selection">
        <h2>Select a Payment Gateway</h2>
        <div>
          <button
            className={`payment-gateway-button ${selectedGateway === 'stripe' ? 'selected' : ''}`}
            onClick={() => setSelectedGateway('stripe')}
          >
            Stripe
          </button>
          <button
            className={`payment-gateway-button ${selectedGateway === 'paypal' ? 'selected' : ''}`}
            onClick={() => setSelectedGateway('paypal')}
          >
            PayPal
          </button>
          <button
            className={`payment-gateway-button ${selectedGateway === 'razorpay' ? 'selected' : ''}`}
            onClick={() => setSelectedGateway('razorpay')}
          >
            Razorpay
          </button>
        </div>
      </div>
      <div className="payment-container">
        {selectedGateway === 'stripe' && <StripePayment />}
        {selectedGateway === 'paypal' && <PayPalPayment />}
        {selectedGateway === 'razorpay' && <RazorpayPayment />}

      </div>
    </div>
  );
};

export default App;
