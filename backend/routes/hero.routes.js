const express = require('express');
const router = express.Router();

const multer = require('multer')
const upload = multer({ dest: 'uploads/temp/heroes' })
// const upload = multer({ dest: 'uploads/public/heroes' })

const hero = require('../controllers/hero.controller');

router.post(
    '/hero/uploadImg', // Route
    upload.single('heroImg'), // Field that contains the file
    hero.uploadImg // Controller will recieve file at => res.send(req.file)
)

router.get(
    '/hero/uploadImg/:imageId', hero.getUploadImg
)

router.get('/heroes', hero.getHeroes);

router.post('/hero', hero.createHero);

router.get('/hero/:id', hero.getHero);

router.put('/hero/:id', hero.editHero);

router.delete('/hero/:id', hero.deleteHero);


module.exports = router;