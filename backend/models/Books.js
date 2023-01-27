const mongoose=require("mongoose") 

const bookSchema=new mongoose.Schema({
        nom:String,
        description:String,
        isbn:String,
        acteur:String,
        editeur:String,
        date_edition:Date,
        image:String
});

const books=mongoose.model('books',bookSchema);

module.exports=books;