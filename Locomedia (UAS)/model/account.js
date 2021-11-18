const mongoose = require('mongoose')

const Account = mongoose.model("Account", {
    namaDepan:{
        type:String,
        required:true,
    },
    namaBelakang:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

});

module.exports = Account;