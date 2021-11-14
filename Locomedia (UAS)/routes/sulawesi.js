const express = require('express')

const router = express.Router()



router.get('/sulawesibarat', (req, res) => {
    res.render('pages/sulawesibarat');
})

router.get('/sulawesiselatan', (req, res) => {
    res.render('pages/sulawesiselatan');
})

router.get('/sulawesitengah', (req, res) => {
    res.render('pages/sulawesitengah');
})

router.get('/sulawesitenggara', (req, res) => {
    res.render('sulawesitenggara');
})

router.get('/sulawesiutara', (req, res) => {
    res.render('pages/sulawesiutara');
})



module.exports = router;