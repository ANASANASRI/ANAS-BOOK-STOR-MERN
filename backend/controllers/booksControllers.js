const books = require("../models/Books")
const bookService=require("../services/bookServices")

const createBook=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await bookService.addBook(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getBook=async (req,res)=>{
    try {
        const result=await bookService.getAllBook()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getBookById=async (req,res)=>{
    try{
        const result=await bookService.getBookById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addBook=(req,res)=>{
    books.create(req.body)
    .then(result=>res.json({msg:"Book est bien ajouté"}))
    
}


const deleteBook=async (req,res)=>{
    try{
        const result= await bookService.deleteBookById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updateBookById=async (req,res)=>{
    try{
        const result= await bookService.updateBook(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createBook,
    getBook,
    updateBookById,
    deleteBook,
    addBook,
    getBookById
} 
