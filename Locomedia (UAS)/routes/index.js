const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index');
})

router.get('/jawa', (req, res) => {
    res.render('pages/jawa');
})

router.get('/sumatera', (req, res) => {
    res.render('pages/sumatera');
})

router.get('/sulawesi', (req, res) => {
    res.render('pages/sulawesi');
})

router.get('/kalimantan', (req, res) => {
    res.render('pages/kalimantan');
})

router.get('/papua', (req, res) => {
    res.render('pages/papua');
})

module.exports = router;