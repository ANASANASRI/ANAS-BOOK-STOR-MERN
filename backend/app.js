const express=require("express");
const mongoose = require('mongoose');
const app=express();
const cors=require("cors"); //cors inporter cors

const loggingMiddelwares=require("./middlewares/loggingMiddelwares")
const prodRoute=require("./routes/productRoutes")
const catRoute=require("./routes/categoryRoutes")
const userRoute=require("./routes/userRoutes")

app.use(express.json());
//app.use(express.urlencoded({extended:true}));
app.use(loggingMiddelwares.loggingParams);
app.use(loggingMiddelwares.loggingUrls) ;

app.use(cors());

require('dotenv').config()
/* console.log(process.env.dbURL)*/

const products = require("./models/products.js");
const categories = require("./models/categories.js")
const users = require("./models/user.js")


mongoose.connect(process.env.dbURL)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/products",prodRoute)
app.use("/categories",catRoute)
app.use("/users",userRoute)


app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(5566,function(){
    console.log("Sever is running");
});
