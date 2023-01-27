const respoService=require("../services/respoServices")

const createrespo=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await respoService.addrespo(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getrespo=async (req,res)=>{
    try {
        const result=await respoService.getAllrespo()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getrespoById=async (req,res)=>{
    try{
        const result=await respoService.getrespoById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addrespo=(req,res)=>{
    respo.create(req.body)
    .then(result=>res.json({msg:"la categorie est bien ajouté"}))
    
}


const deleterespo=async (req,res)=>{
    try{
        const result= await respoService.deleterespoById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updaterespoById=async (req,res)=>{
    try{
        const result= await respoService.updaterespo(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createrespo,
    getrespo,
    updaterespoById,
    deleterespo,
    addrespo,
    getrespoById
} 
