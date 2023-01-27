const mongoose=require("mongoose") 

const respoSchema=new mongoose.Schema({
        nom:String,
        prenom:String,
        email:String,
        password:String,
        photo:String
});

const respo=mongoose.model('respo',respoSchema);

module.exports=respo;