const express = require('express');
const router = express.Router();
const passport = require('passport')

const adminController = require('../controllers/admin.controller')

router.get('/admin/filestree', passport.authenticate('jwt', { session: false }), adminController.filestree)
router.post('/admin/deletefile', passport.authenticate('jwt', { session: false }),adminController.deletefile)


module.exports = router; 