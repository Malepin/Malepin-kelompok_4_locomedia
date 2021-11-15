const express = require('express')

const router = express.Router()


router.get('/papua', (req, res) => {
    res.render('pages/papua');
})





module.exports = router;