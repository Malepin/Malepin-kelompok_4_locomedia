const express = require('express')

const router = express.Router()


router.get('/jawabarat', (req, res) => {
    res.render('pages/jawabarat');
})

router.get('/jawatimur', (req, res) => {
    res.render('pages/jawatimur');
})

router.get('/jawatengah', (req, res) => {
    res.render('pages/jawatengah');
})




module.exports = router;