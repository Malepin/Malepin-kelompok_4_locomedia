const express = require('express')
const bodyparser = require('body-parser')
const session = require('express-session')
const app = express()
const mongoose = require('mongoose')

app.use(express.static('public'))
app.set('view engine', 'ejs' )
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use(session({
    secret: 'som3_secret_keys',
    cookie: {}
}))

app.use((req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
})

mongoose.connect(('mongodb+srv://Mathew:gesFd1Q0PI9u0hjb@locomedia.fe0cl.mongodb.net/locomedia?retryWrites=true&w=majority')
, (err,res) => {
    if (err){
        console.log(err);
    } else {
        console.log('Database terhubung untuk seeding');
    }
})

// SEDDING

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
const artikelRouter = require('./routes/artikel')
const adminRouter = require('./routes/admin')
const { cookie } = require('express-validator')



app.use('/', indexRouter,)

app.use('/', ttdRouter)

app.use('/', citiesRouter);

app.use('/', shoppingRouter);

app.use('/', nawRouter);

app.use('/', funRouter);

app.use('/', famousplacesRouter);

app.use('/', jawaRouter);

app.use('/', kalimantanRouter);

app.use('/', sumateraRouter);

app.use('/', sulawesiRouter);

app.use('/', papuaRouter);

app.use('/', artikelRouter);

app.use('/', adminRouter);


app.listen(3000, ()=> {
    console.log('Web berjalan pada server 3000')
})