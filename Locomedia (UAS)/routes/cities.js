const express = require('express')

const router = express.Router()

router.get('/bandung', (req, res) => {
    res.render('pages/cities/bandung')
})

router.get('/denpasar', (req, res) => {
    res.render('pages/denpasar')
})

router.get('/jkt', (req, res) => {
    res.render('pages/jkt')
})

router.get('/kuta', (req, res) => {
    res.render('pages/kuta')
})

router.get('/ubud', (req, res) => {
    res.render('pages/ubud')
})

router.get('/surabaya', (req, res) => {
    res.render('pages/surabaya')
})
module.exports = router;