const express = require('express')

const router = express.Router()

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

module.exports = router;