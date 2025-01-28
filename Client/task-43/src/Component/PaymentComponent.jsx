import React, { useState } from 'react';

const PaymentComponent = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);

        try {
            // Requesting the server to create a payment intent
            const response = await fetch('http://localhost:3001/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 2000 }) // Amount in cents
            });

            const data = await response.json();
            const clientSecret = data.clientSecret;

            // Load Stripe.js and confirm the payment
            const stripe = window.Stripe('pk_test_YOUR_PUBLISHABLE_KEY'); // Use your publishable key here
            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement, // Assuming cardElement is a Stripe Element
                    billing_details: {
                        name: 'Customer Name',
                    },
                },
            });

            if (error) {
                alert(`Payment failed: ${error.message}`);
            } else {
                alert('Payment succeeded!');
            }
        } catch (error) {
            alert(`Payment request failed: ${error.message}`);
        }

        setLoading(false);
    };

    return (
        <div>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default PaymentComponent;
