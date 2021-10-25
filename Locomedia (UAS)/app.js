const express = require('express')

const app = express()

app.get('/', function(req,res) {
    res.sendFile(__dirname+ '/views/pages/index.html')
})

app.listen(3000, ()=> {
    console.log('Web berjalan pada server 3000')
})