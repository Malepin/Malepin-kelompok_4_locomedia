const express = require('express')

const router = express.Router()

router.get('/naw', (req, res) => {
    res.render('pages/naw');
})

router.get('/beaches', (req, res) => {
    res.render('pages/beaches')
})

router.get('/fun', (req, res) => {
    res.render('pages/fun')
})

router.get('/famousplaces', (req, res) => {
    res.render('pages/famousplaces')
})

router.get('/shopping', (req, res) => {
    res.render('pages/shopping')
})

router.get('/bandung', (req, res) => {
    res.render('pages/bandung')
})

router.get('/jakarta', (req, res) => {
    res.render('pages/jakarta')
})

router.get('/ubud', (req, res) => {
    res.render('pages/ubud')
})

router.get('/yogyakarta', (req, res) => {
    res.render('pages/yogyakarta')
})

module.exports = router;