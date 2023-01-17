const mongoose=require("mongoose") 

const bookSchema=new mongoose.Schema({
        name:String
});

const books=mongoose.model('Categories',bookSchema);

module.exports=books;