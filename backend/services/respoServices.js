const respo=require("../models/respo");

const addrespo=async(c)=>{
    return await respo.create(c)
};

const getAllrespo=async()=>{
    return await respo.find()
};

const getrespoById=async (id)=>{
    return await respo.findOne({_id:id})
    
}
const deleterespoById=async (id)=>{
    return await respo.findByIdAndDelete({_id:id})
}

const updaterespo=async (respo)=>{
    console.log(respo)
    return await respo.findByIdAndUpdate(respo._id,respo)
    
}

module.exports={
    addrespo,
    getAllrespo,
    updaterespo,
    deleterespoById,
    getrespoById
}