import React, { useState } from 'react';

const RazorpayPayment = ({ plan }) => {
    const planPrice = plan === 'monthly' ? 2000 : 20000; // Monthly (INR 2000) or Yearly (INR 20000)
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // Fetch the Razorpay order from your server with plan-based amount
            const response = await fetch('http://localhost:3001/create-razorpay-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: planPrice, currency: 'INR' }),
            });

            const data = await response.json();

            if (!data.id) {
                throw new Error('Failed to create Razorpay order');
            }

            const options = {
                key: 'your-razorpay-key', // Replace with your Razorpay key
                amount: data.amount, // Amount in paise (100 paise = 1 INR)
                currency: data.currency,
                order_id: data.id,
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                    contact: '1234567890',
                },
                handler: function (response) {
                    alert('Payment Successful!');
                    // You can verify the payment with the backend here
                    fetch('http://localhost:3001/verify-razorpay-payment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                        }),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.success) {
                                alert('Payment verified');
                            } else {
                                alert('Payment verification failed');
                            }
                        })
                        .catch((err) => {
                            alert('Error verifying payment');
                            console.error(err);
                        });
                },
                modal: {
                    ondismiss: function () {
                        alert('Payment window closed');
                    },
                },
                theme: {
                    color: '#3399cc', // Optional: Add color to your payment window
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.on('payment.failed', function (response) {
                alert('Payment Failed!');
                console.log(response.error);
            });

            // Open Razorpay payment window
            razorpay.open();

        } catch (error) {
            alert('Payment failed! Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Pay with Razorpay</h2>
            <p>Price: ₹{planPrice}</p>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default RazorpayPayment;
