const express = require('express')

const router = express.Router()

router.get('/artikel1', (req, res) => {
    res.render('pages/artikel1')
})

module.exports = router;