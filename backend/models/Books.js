const mongoose=require("mongoose") 

const bookSchema=new mongoose.Schema({
        name:String
});

const books=mongoose.model('books',bookSchema);

module.exports=books;