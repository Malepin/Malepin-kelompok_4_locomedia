const express = require('express');
const { Result } = require('express-validator');
const City = require('../model/city')
const Article = require('../model/article')

const router = express.Router()

router.get('/', async(req, res) => {
    var articleData = await Article.find()
    res.render('pages/index', {articles: articleData});
})

router.post('/', (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    
    if (email == "mathew@gmail.com" && password == "123"){
        req.session.isLoggedIn = true;
        res.redirect(req.get('referer'));
    } else {
        res.redirect(req.get('referer'));
    }
})

router.post('/search', (req, res) =>{
    const name = req.body.search;
    res.redirect('/' + name);
})

router.get('/admin', async(req, res) => {
    var cityData = await City.find();
    var articleData = await Article.find();

    res.render('pages/admin', {
        cities: cityData,
        articles: articleData,
    });
})

router.post('/admin', async(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    var cityData = await City.find();
    var articleData = await Article.find();

    res.render('pages/admin', {
        cities: cityData,
        articles: articleData,
    });

    if (email == "mathew@gmail.com" && password == "123"){
        req.session.isLoggedIn = true;
        res.render('pages/admin');
    } else {
        res.redirect(req.get('referer'));
    }
})

router.get('/admin-update/:id', async(req, res) =>{
    const city = await City.findById(req.params.id);
    var cityData = await City.find();

    res.render('pages/admin-update', {
        city,
        cities: cityData,
    });
})

router.get('/admin-delete/:id', async(req, res) =>{
    const city = await City.findById(req.params.id);
    var cityData = await City.find();

    res.render('pages/admin-delete', {
        city,
        cities: cityData,
    });

    City.findByIdAndDelete(req.params.id).then((result) => {
        res.redirect('/admin');
    });
})


router.get('/logout', (req, res) =>{
    req.session.isLoggedIn = false;
    res.redirect(req.get('referer'));
})

router.get('/jawa', (req, res) => {
    res.render('pages/jawa');
})

router.get('/sumatera', (req, res) => {
    res.render('pages/sumatera');
})

router.get('/sulawesi', (req, res) => {
    res.render('pages/sulawesi');
})

router.get('/kalimantan', (req, res) => {
    res.render('pages/kalimantan');
})

router.get('/review', (req, res) => {
    res.render('pages/review');
})

router.get('/papua', (req, res) => {
    res.render('pages/papua');
})

router.get('/ttd', async(req, res) => {
    var cityData = await City.find();
    res.render('pages/ttd', {cities: cityData});
})



module.exports = router;