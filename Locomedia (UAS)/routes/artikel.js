const express = require('express')

const router = express.Router()

router.get('/artikel1', (req, res) => {
    res.render('pages/artikel1')
})

router.get('/artikel2', (req, res) => {
    res.render('pages/artikel2')
})

router.get('/artikel3', (req, res) => {
    res.render('pages/artikel3')
})

module.exports = router;