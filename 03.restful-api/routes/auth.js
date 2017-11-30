const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const config = require('../config');
const connection = require('../db');

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const query = `SELECT * FROM users WHERE username=${connection.escape(username)}`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500);
      res.status({
        success: false,
        message: 'Database connection error'
      });
    }
    if (results.length === 0) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      const user = results[0];
      if (user.password !== password) {
        res.json({
          success: false,
          message: 'Authentication failed. User and password do not match.'
        });
      } else {
        const token = jwt.sign({ email: user.email }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.json({
          success: true,
          message: 'Successful login',
          token: token
        });
      }
    }
  });
});

module.exports = router;