const express = require('express')

const router = express.Router()

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

module.exports = router;