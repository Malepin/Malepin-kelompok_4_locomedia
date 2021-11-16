const express = require('express')

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

router.get('/ttd', (req,res) => {
    res.render('pages/ttd');
})



module.exports = router;