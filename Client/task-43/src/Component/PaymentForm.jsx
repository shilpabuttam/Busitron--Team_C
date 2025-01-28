import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-stripe-public-key');  // Use your Stripe public key

const PaymentForm = ({ amount, currency }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentIntent } = await stripe.confirmCardPayment('your-client-secret', {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            console.log(error.message);
        } else {
            alert('Payment Successful!');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay {amount} {currency}
            </button>
        </form>
    );
};

const StripePayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm amount={20} currency="USD" />
        </Elements>
    );
};

export default StripePayment;
