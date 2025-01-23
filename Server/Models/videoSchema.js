let mongoose=require("mongoose");
let videoSchema=new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number, required: true },
    });
module.exports=mongoose.model("videos",videoSchema);
