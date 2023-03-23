const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Login')
.then(()=>console.log('mongodb conneted........'))
.catch((err)=>console.log(err));

const Loginschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

const collection=mongoose.model('collection1',Loginschema);
module.exports=collection