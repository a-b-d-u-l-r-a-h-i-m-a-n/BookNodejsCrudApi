const mongoose=require('mongoose');
const connection=require('./index');
const book=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true
    }
})

const Books=connection.model('Book',book);
module.exports=Books;