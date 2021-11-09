const express = require('express')

const router = express.Router()

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