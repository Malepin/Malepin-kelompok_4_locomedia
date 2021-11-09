const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs' )

const account = require("./model/account");

const indexRouter = require('./routes/index');
const ttdRouter = require('./routes/ttd');

app.use('/', indexRouter,)

app.use('/', ttdRouter)



app.listen(3000, ()=> {
    console.log('Web berjalan pada server 3000')
})