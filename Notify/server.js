const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/notifications', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Define Mongoose Schemas
const PreferenceSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    genres: { type: [String], required: false }, // Array of genres
    categories: { type: [String], required: false }, // Array of categories
    notificationType: { type: String, required: true }, // 'email' or 'in-app'
});

const NotificationSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create Models
const Preference = mongoose.model('Preference', PreferenceSchema);
const Notification = mongoose.model('notifications', NotificationSchema);  // Correct schema name

// API Endpoints

// Add user preferences
app.post('/api/add-preference', async (req, res) => {
    const { userEmail, genres, categories, notificationType } = req.body;

    try {
        const preference = new Preference({
            userEmail,
            genres: genres || [],
            categories: categories || [],
            notificationType,
        });
        await preference.save();
        res.status(201).send('Preferences saved successfully');
    } catch (err) {
        console.error('Error saving preferences:', err);
        res.status(500).send('Error saving preferences');
    }
});

// Trigger notifications
app.post('/api/send-notifications', async (req, res) => {
    const { newContentGenre, newContentCategory, message } = req.body;

    try {
        // Find users who should be notified
        const users = await Preference.find({
            $or: [
                { genres: newContentGenre },
                { categories: newContentCategory },
            ],
        });

        users.forEach(async (user) => {
            if (user.notificationType === 'email') {
                sendEmail(user.userEmail, 'New Content Alert', message);
            } else {
                const notification = new Notification({
                    userEmail: user.userEmail,
                    message,
                });
                await notification.save();
            }
        });

        res.status(200).send('Notifications sent successfully');
    } catch (err) {
        console.error('Error sending notifications:', err);
        res.status(500).send('Error sending notifications');
    }
});

// Fetch in-app notifications
app.get('/api/get-notifications/:email', async (req, res) => {
    const { email } = req.params;

    console.log('Fetching notifications for email:', email);  // Log email

    try {
        // Case-insensitive regex query for email matching
        const notifications = await Notification.find({
            userEmail: { $regex: new RegExp(`^${email}$`, 'i') },  // Case-insensitive regex
        }).sort({ createdAt: -1 });

        console.log('Fetched Notifications:', notifications);  // Log the fetched notifications

        if (notifications.length === 0) {
            console.log('No notifications found for this email');  // Log if no notifications are found
        }

        res.json(notifications);
    } catch (err) {
        console.error('Error fetching notifications:', err);
        res.status(500).send('Error fetching notifications');
    }
});

// Helper function to send email notifications
const sendEmail = (to, subject, content) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password', // Use an app password for security
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text: content,
    };

    transporter.sendMail(mailOptions, (err) => {
        if (err) console.error('Error sending email:', err);
        else console.log(`Email sent to ${to}`);
    });
};

// Start the server on port 5000
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
