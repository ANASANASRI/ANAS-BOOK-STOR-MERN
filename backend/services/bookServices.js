const Book=require("../models/Books");

const addBook=async(b)=>{
    return await Book.create(b)
};

const getAllBook=async()=>{
    return await Book.find()
};

const getBookById=async (id)=>{
    return await Book.findOne({_id:id})
    
}
const deleteBookById=async (id)=>{
    return await Book.findByIdAndDelete({_id:id})
}

const updateBook=async (book)=>{
    console.log(book)
    return await Book.findByIdAndUpdate(book._id,book)
    
}

module.exports={
    addBook,
    getAllBook,
    updateBook,
    deleteBookById,
    getBookById
}