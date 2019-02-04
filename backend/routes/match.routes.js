const express = require('express');
const router = express.Router();

const match = require('../controllers/match.controller');

router.get('/matches', match.getMatches);

router.post('/match', match.createMatch);

router.get('/match/:id', match.getMatch);

router.put('/match/:id', match.editMatch);

router.delete('/match/:id', match.deleteMatch);


module.exports = router; 