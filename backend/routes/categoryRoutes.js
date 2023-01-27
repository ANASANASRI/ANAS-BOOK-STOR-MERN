const express=require("express")
const route=express.Router()
const categoriesControllers=require("../controllers/categoriesControllers")

route.get("/",categoriesControllers.getCategory)
route.post("/",categoriesControllers.createCategory)
route.get("/:id",categoriesControllers.getCategoryById)
route.delete("/:id",categoriesControllers.deleteCategory)
route.put("/:id",categoriesControllers.updateCategoryById)

module.exports=route