const express = require('express')

const router = express.Router()

router.get('/borobudur', (req, res) => {
    res.render('pages/borobudur')
})

router.get('/jakartaold', (req, res) => {
    res.render('pages/jakartaold')
})

router.get('/tirta', (req, res) => {
    res.render('pages/tirta')
})

router.get('/gatotkaca', (req, res) => {
    res.render('pages/gatotkaca')
})

router.get('/monas', (req, res) => {
    res.render('pages/monas')
})

router.get('/yogya', (req, res) => {
    res.render('pages/monas')
})

router.get('/batik', (req, res) => {
    res.render('pages/batik')
})

router.get('/nasional', (req, res) => {
    res.render('pages/nasional')
})

router.get('/purpa', (req, res) => {
    res.render('pages/purpa')
})

module.exports = router;