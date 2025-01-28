const express = require('express');
const stripe = require('stripe')('STRIPE_SECRET_KEY'); // Replace with your secret key
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Subscription plan details (you could store this in a database)
const plans = {
    monthly: {
        id: 'monthly-plan-id',
        amount: 2000,
        interval: 'month',
    },
    yearly: {
        id: 'yearly-plan-id',
        amount: 24000,
        interval: 'year',
    }
};

// Create Stripe Checkout Session for subscription
app.post('/create-checkout-session', async (req, res) => {
    const { planType } = req.body;

    if (!plans[planType]) {
        return res.status(400).send('Invalid plan type');
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `${planType} subscription`,
                    },
                    unit_amount: plans[planType].amount,
                },
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send('Error creating checkout session');
        console.error(error);
    }
});

// Webhook to listen to Stripe events (for subscription updates, payment success, etc.)
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'your-stripe-webhook-secret'; // Replace with your webhook secret

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log(`Payment for session ${session.id} was successful.`);

            break;
        case 'invoice.payment_failed':
            const invoice = event.data.object;
            console.log(`Payment for invoice ${invoice.id} failed.`);
            // Handle failed payment logic here (e.g., notify the user)
            break;
        // Handle other events like subscription cancellations, upgrades, etc.
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).send('Event received');
});

// Cancel subscription
app.post('/cancel-subscription', async (req, res) => {
    const { subscriptionId } = req.body;  // The Stripe subscription ID

    try {
        const subscription = await stripe.subscriptions.del(subscriptionId);
        res.json({ success: true, message: 'Subscription canceled successfully' });
    } catch (error) {
        res.status(500).send('Error canceling subscription');
        console.error(error);
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
