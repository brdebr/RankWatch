const express = require('express');
const router = express.Router();

const multer = require('multer')
const upload = multer({ dest: 'uploads/temp/maps' })
// const upload = multer({ dest: 'uploads/public/maps' })

const map = require('../controllers/map.controller');

router.post(
    '/map/uploadImg', // Route
    upload.single('mapImg'), // Field that contains the file
    map.uploadImg // Controller will recieve file at => res.send(req.file)
)

router.get(
    '/map/uploadImg/:imageId', map.getUploadImg
)

router.get('/maps', map.getMaps);

router.post('/map', map.createMap);

router.get('/map/:id', map.getMap);

router.put('/map/:id', map.editMap);

router.delete('/map/:id', map.deleteMap);


module.exports = router;