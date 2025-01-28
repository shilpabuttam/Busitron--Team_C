


const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://naveenyadav1622:naveen6300@cluster0.n41cl.mongodb.net/');
        console.log('Connected to db');
    } catch (error) {
        console.error(error.message);
        
    }
};

module.exports = connectDB;