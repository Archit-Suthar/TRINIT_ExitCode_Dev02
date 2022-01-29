const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminsSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true,
        default:'Employee'
    }
})

module.exports = mongoose.model('admin',AdminsSchema);