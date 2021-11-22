const mongoose = require('mongoose')
const database = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/locomedia';

mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewURLParser:true,
});

mongoose.connection.on("connected", ()=> {
    console.log(`${database} terkoneksi....`);
});
