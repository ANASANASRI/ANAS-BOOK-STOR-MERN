const Category=require("../models/categories");

const addCategory=async(c)=>{
    return await Category.create(c)
};

const getAllCategory=async()=>{
    return await Category.find()
};

const getCategoryById=async (id)=>{
    return await Category.findOne({_id:id})
    
}
const deleteCategoryById=async (id)=>{
    return await Category.findByIdAndDelete({_id:id})
}

const updateCategory=async (category)=>{
    console.log(category)
    return await Category.findByIdAndUpdate(category._id,category)
    
}

module.exports={
    addCategory,
    getAllCategory,
    updateCategory,
    deleteCategoryById,
    getCategoryById
}