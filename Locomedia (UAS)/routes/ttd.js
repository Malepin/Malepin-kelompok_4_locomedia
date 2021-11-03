const express = require('express')

const router = express.Router()

router.get('/naw', (req, res) => {
    res.render('pages/naw');
})

router.get('/cities', (req, res) => {
    res.render('pages/cities')
})

module.exports = router;