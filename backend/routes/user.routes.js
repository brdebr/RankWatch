const express = require('express')
const router = express.Router()

const passport = require('passport')

const UserController = require('../controllers/user.controller')

router.get('/users', passport.authenticate('jwt', { session: false }), UserController.getUsers)
router.get('/users/current', passport.authenticate('jwt', { session: false }), UserController.getCurrent)

module.exports = router; 