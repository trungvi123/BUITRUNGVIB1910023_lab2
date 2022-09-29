import mongoose from "mongoose";


const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    favorite:{
        type:Boolean,
        require:true
    }
});

export const contacModel = mongoose.model('contact',schema)