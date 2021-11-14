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
const jawaRouter = require('./routes/jawa')
const kalimantanRouter = require('./routes/kalimantan')
const sumateraRouter = require('./routes/sumatera')
const sulawesiRouter = require('./routes/sulawesi')
const papuaRouter = require('./routes/papua')

app.use('/', indexRouter,)

app.use('/', ttdRouter)

app.use('/', citiesRouter);

app.use('/', shoppingRouter);

app.use('/', nawRouter);

app.use('/', funRouter);

app.use('/', famousplacesRouter);

app.use('/', jawaRouter);

//app.use('/', kalimantanRouter);

//app.use('/', sumateraRouter);

//app.use('/', sulawesiRouter);

//app.use('/', papuaRouter);


app.listen(3000, ()=> {
    console.log('Web berjalan pada server 3000')
})