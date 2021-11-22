const express = require('express')
const City = require('../model/city')

const router = express.Router()
const methodOverride = require('method-override');
const Article = require('../model/article');
router.use(methodOverride("_method"));

router.post('/admin/cityAdd', (req, res) => {
    City.insertMany(req.body, (error, result) => {
        res.redirect('/admin');
    })
})

router.post('/admin/articleAdd', (req, res) => {
    Article.insertMany(req.body, (error, result) => {
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

router.post('/admin-update-article/articleUpdate', (req,res) => {
    Article.updateOne({
        _id: req.body._id,
    }, {
        $set:{
            link: req.body.link,
            imagePath: req.body.imagePath,
            sumber: req.body.sumber,
            title: req.body.title,
        },
    }).then((result) => {
        res.redirect('/admin');
    });
})

router.post('/admin-update/cityDelete', (req,res) => {
    City.findByIdAndDelete(req.params.id).then((result) => {
        res.redirect('/admin');
    });
})

router.post('/admin-update-article/articleDelete', (req,res) => {
    Article.findByIdAndDelete(req.params.id).then((result) => {
        res.redirect('/admin');
    });
})

module.exports = router;