const mongoose = require('mongoose');
const { Schema } = mongoose;
const BugsSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true,
        default:'General'
    },
    status:{
        type:String,
        required:true,
        default:'TODO'
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        defalut:Date.now
    }
})

module.exports = mongoose.model('bug',BugsSchema);