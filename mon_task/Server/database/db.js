

const mongoose=require('mongoose');

const connetDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://naveenyadav1622:naveen6300@cluster0.zzp8d.mongodb.net/')
        console.log('database connected successfully');
    } catch (error) {
        console.log('database failed to connect ,somthing wrong',error);
        process.exit(1);
    }
}
module.exports = connetDB;