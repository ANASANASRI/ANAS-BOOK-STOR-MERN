const mongoose=require("mongoose") 

const bookSchema=new mongoose.Schema({
        nom:String,
        description:String,
        isbn:String,
        acteur:String,
        editeur:String,
        date_edition:Date,
        image:String,
        category:{
                type:mongoose.Types.ObjectId,
                ref:"categories"
        }
});

const books=mongoose.model('books',bookSchema);

module.exports=books;