let express=require("express");
let cors=require("cors")
require("./Databases/dbConfig");
let videoRoute=require("./Routes/videoRoute")
let app=express();
app.use(cors());
app.use("/",videoRoute);
app.get("/",(req,res)=>{
    console.log("App is running on port 4000");
    res.send("<h1>Hello World</h1>");
})
app.use("/uploads", express.static("uploads"));
app.listen(4000);
app.use(express.json());