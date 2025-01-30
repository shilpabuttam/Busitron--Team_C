const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://udayasrivalluri354:Busitron_9999@cluster0.whkcv.mongodb.net/").then(()=>console.log("db connected"));

}

module.exports = connectDB;

