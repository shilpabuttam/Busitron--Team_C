const mongoose = require('mongoose');
const Activity = require('../Models/Activity'); // Path to your schema

const connectDB = async () => {
  const seedData = [
    {
      userId: '64f3ccefaf34f2e1b56a5b22',
      type: 'video_view',
      description: 'User watched a video on React tutorials',
    },
    {
      userId: '64f3ccefaf34f2e1b56a5b22',
      type: 'subscription',
      description: 'User subscribed to the newsletter',
    },
    {
      userId: '64f3ccefaf34f2e1b56a5b22',
      type: 'comment',
      description: 'User commented on a blog post',
    },
    {
      userId: '64f3ccefaf34f2e1b56a5b22',
      type: 'video_view',
      description: 'User watched a video on MongoDB setup',
    },
    {
      userId: '64f3ccefaf34f2e1b56a5b22',
      type: 'subscription',
      description: 'User upgraded to premium plan',
    },
    {
      userId: '64f3ccefaf34f2e1b56a5b22',
      type: 'comment',
      description: 'User replied to a comment',
    },
  ];

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Clear existing data and insert seed data
    await Activity.deleteMany({}); // Optional: Clear existing data
    await Activity.insertMany(seedData);
    console.log('Database seeded successfully');

    console.log('Seed Data:', seedData);
  } catch (err) {
    console.error('Error connecting to MongoDB or seeding data:', err.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
