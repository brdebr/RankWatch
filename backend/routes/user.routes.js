const express = require('express')
const router = express.Router()

const passport = require('passport')

const UserController = require('../controllers/user.controller')

router.get('/users', passport.authenticate('jwt', { session: false }), UserController.getUsers)

module.exports = router; 