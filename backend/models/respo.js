const mongoose=require("mongoose") 

const respoSchema=new mongoose.Schema({
        nom:{String,require:true},
        prenom:{String,require:true},
        email:{String,require:true},
        password:{String,require:true},
        photo:{String,require:false}
});

const respo=mongoose.model('respo',respoSchema);

module.exports=respo;