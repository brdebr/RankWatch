const express = require('express');
const router = express.Router();
const file = require('../controllers/file.controller');

const passport = require('passport')

router.get(
    '/file/:id', passport.authenticate('jwt', { session: false }) ,file.getFile
)

module.exports = router;