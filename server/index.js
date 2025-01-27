import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userroute from "./routes/user.route.js";



dotenv.config()
const app = express();

//getting an PORT from .env
const port = process.env.PORT || 7300;

//cors
app.use(cors({
    origin:["http://localhost:3000/"],
    methods: "GET,POST,PUT, PATCH, DELETE, HEAD",
    credentials : true
}))



//connectiong an database
const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected')
    } catch (error) {
        console.log('Database Error', error)
    }
};

connectDataBase().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is Runnign in PORT ${port}`)
    })
    //app.listen is function of express it will allow you listen specific PORT
})




