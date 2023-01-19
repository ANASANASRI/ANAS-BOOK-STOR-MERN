const express=require("express")
const route=express.Router()
const booksControllers=require("../controllers/booksControllers")

route.get("/",booksControllers.getBook)
route.post("/",booksControllers.createBook)
route.get("/:id",booksControllers.getBookById)
route.delete("/:id",booksControllers.deleteBook)
route.put("/:id",booksControllers.updateBookById)

module.exports=route