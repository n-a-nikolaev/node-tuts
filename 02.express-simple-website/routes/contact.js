const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();


/* GET contact page. */
router.get('/', function (req, res, next) {
    res.render('contact', {
        title: 'Contact Us',
        route: 'contact'
    });
});

router.post('/', function (req, res, next) {
    const message = [
        `name: ${req.body.username}`,
        `email: ${req.body.email}`,
        `subject: ${req.body.subject}`,
        `message: ${req.body.message}`
    ];
    fs.appendFile(path.join(process.cwd(), 'mail/sent.txt'), message.join(', ') + '\r\n', function (err) {
        if (err) throw err;
        console.info('Saved!');
        res.redirect('/');
    });
});

module.exports = router;
