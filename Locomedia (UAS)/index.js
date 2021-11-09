const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs' )

const account = require("./model/account");

const indexRouter = require('./routes/index');
const ttdRouter = require('./routes/ttd');
const citiesRouter = require('./routes/cities');
const shoppingRouter = require('./routes/shopping')
const nawRouter = require('./routes/naw')
const funRouter = require('./routes/fun')
const famousplacesRouter = require('./routes/famousplaces')

app.use('/', indexRouter,)

app.use('/', ttdRouter)

app.use('/', citiesRouter);

app.use('/', shoppingRouter);

app.use('/', nawRouter);

app.use('/', funRouter);

app.use('/', famousplacesRouter);


app.listen(3000, ()=> {
    console.log('Web berjalan pada server 3000')
})