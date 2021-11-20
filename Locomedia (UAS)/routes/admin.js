const express = require('express')
const City = require('../model/city')

const router = express.Router()

router.post('/admin/cityAdd', (req, res) => {
    City.insertMany(req.body, (error, result) => {
        res.redirect('/admin');
    })
})

module.exports = router;