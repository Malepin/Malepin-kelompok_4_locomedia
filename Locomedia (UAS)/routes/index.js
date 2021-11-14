const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index', { name: 'Mathew'});
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

router.get('/ttd', (req,res) => {
    res.render('pages/ttd');
})








router.get('/jawatimur', (req, res) => {
    res.render('pages/jawatimur');
})

router.get('/jawatengah', (req, res) => {
    res.render('pages/jawatengah');
})







router.get('/kalimantanbarat', (req, res) => {
    res.render('pages/kalimantanbarat');
})

router.get('/kalimantanselatan', (req, res) => {
    res.render('pages/kalimantanselatan');
})

router.get('/kalimantantengah', (req, res) => {
    res.render('pages/kalimantantengah');
})

router.get('/kalimantantimur', (req, res) => {
    res.render('pages/kalimantantimur');
})

router.get('/kalimantanutara', (req, res) => {
    res.render('pages/kalimantanutara');
})




module.exports = router;