const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/locomedia');

const Account = mongoose.model("Account", {
    nama:{
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

const account1 = new Account({
    nama:"Mathew",
    email:"Mathew@gmail.com",
    password:"12345678",
})

account1.save().then((Account) => console.log(Account));