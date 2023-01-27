const express=require("express")
const route=express.Router()
const respoControllers=require("../controllers/respoControllers")

route.get("/",respoControllers.getrespo)
route.post("/",respoControllers.createrespo)
route.get("/:id",respoControllers.getrespoById)
route.delete("/:id",respoControllers.deleterespo)
route.put("/:id",respoControllers.updaterespoById)

module.exports=route