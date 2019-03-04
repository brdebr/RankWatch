const express = require('express');
const router = express.Router();

const map = require('../controllers/map.controller');

router.get('/maps', map.getMaps);

router.post('/map', map.createMap);

router.get('/map/:id', map.getMap);

router.put('/map/:id', map.editMap);

router.delete('/map/:id', map.deleteMap);


module.exports = router; 