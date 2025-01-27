
import mongoose from 'mongoose'


const useSchema = new mongoose.Schema({
    email : {
        type : String,
        requrired : true
    },
    password : {
        type : String,
        requrired : ture
    },
    name : {
        type:String,
        requrired : ture
    },
    role : {
        type : String,
        enum : ["user","admin","superadmin"],
        default : "user"
    }
})

export default mongoose.model("user", useSchema)