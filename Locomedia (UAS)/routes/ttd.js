const express = require('express')

const router = express.Router()

router.get('/naw', (req, res) => {
    res.render('pages/naw');
})

router.get('/cities', (req, res) => {
    res.render('pages/cities')
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

router.get('/dufan', (req, res) => {
    res.render('pages/dufan')
})

router.get('/funworld', (req, res) => {
    res.render('pages/funworld')
})

router.get('/transstudio', (req, res) => {
    res.render('pages/transstudio')
})

router.get('/baliwakepark', (req, res) => {
    res.render('pages/baliwakepark')
})

router.get('/tamansegaramadu', (req, res) => {
    res.render('pages/tamansegaramadu')
})

router.get('/waterboombali', (req, res) => {
    res.render('pages/waterboombali')
})

router.get('/baluran', (req, res) => {
    res.render('pages/baluran')
})

router.get('/gitgit', (req, res) => {
    res.render('pages/gitgit')
})

router.get('/nusapenida', (req, res) => {
    res.render('pages/nusapenida')
})

router.get('/balibirdpark', (req, res) => {
    res.render('pages/balibirdpark')
})

router.get('/balizoo', (req, res) => {
    res.render('pages/balizoo')
})

router.get('/komodo', (req, res) => {
    res.render('pages/komodo')
})

router.get('/mkg', (req, res) => {
    res.render('pages/mkg')
})

router.get('/aeonbsd', (req, res) => {
    res.render('pages/aeonbsd')
})

router.get('/grandbatam', (req, res) => {
    res.render('pages/grandbatam')
})

router.get('/tunjangan', (req, res) => {
    res.render('pages/tunjangan')
})

router.get('/phinisi', (req, res) => {
    res.render('pages/phinisi')
})

router.get('/gi', (req, res) => {
    res.render('pages/gi')
})

module.exports = router;