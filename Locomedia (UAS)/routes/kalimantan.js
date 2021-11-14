const express = require('express')

const router = express.Router()



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