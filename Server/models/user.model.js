import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema({
    email : {
        Type: String,
        required: true
    },
    role: {
        Type: String,
        enum: ["user","adimin","superadmin"]
    }
})