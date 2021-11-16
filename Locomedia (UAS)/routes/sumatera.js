const express = require('express')

const router = express.Router()



router.get('/sumaterabarat', (req, res) => {
    res.render('pages/sumaterabarat');
})

router.get('/sumateraselatan', (req, res) => {
    res.render('pages/sumatera');
})

router.get('/sumaterautara', (req, res) => {
    res.render('pages/sumaterautara');
})




module.exports = router;