const express = require('express')
const City = require('../model/city')

const router = express.Router()

router.post('/cityAdd', (req, res) => {
    City.insertMany(req.body, (error, result) => {
        res.redirect('/admin');
    })
})

router.post('/admin-update/cityUpdate', (req,res) => {
    City.updateOne({
        _id: req.body._id,
    }, {
        $set:{
            link: req.body.link,
            imagePath: req.body.imagePath,
            name: req.body.name,
            location: req.body.location,
        },
    }).then((result) => {
        res.redirect('/admin');
    });
})

module.exports = router;