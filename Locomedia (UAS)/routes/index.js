const express = require('express');
const { Result } = require('express-validator');
const City = require('../model/city')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index');
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
    res.render('pages/admin', {cities: cityData});
})

router.post('/admin', async(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    var cityData = await City.find();
    res.render('pages/admin', {cities: cityData});

    if (email == "mathew@gmail.com" && password == "123"){
        req.session.isLoggedIn = true;
        res.render('pages/admin');
    } else {
        res.redirect(req.get('referer'));
    }
})

router.delete('/admin', (req, res) => {
    City.findByIdAndDelete(req.body.id).then((result) => {
        res.redirect('/admin');
    });
})

router.get('/admin-update/:id', async(req, res) =>{
    const city = await City.findById(req.params.id);
    var cityData = await City.find();

    res.render('pages/admin-update', {
        city,
        cities: cityData,
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

router.get('/papua', (req, res) => {
    res.render('pages/papua');
})

router.get('/ttd', async(req, res) => {
    var cityData = await City.find();
    res.render('pages/ttd', {cities: cityData});
})



module.exports = router;