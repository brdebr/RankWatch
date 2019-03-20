const Hero = require('../database/models/Hero');
const File = require('../database/models/File');
var fs = require('fs');
var path = require('path');
const HeroController = {};

HeroController.getHeroes = async (req, res) => {
    // Return all Heroes
    // Route : GET /api/Heroes
    try {
        const heroes = await Hero.find();
        res.json({
            message: "Here is a list of Heroes :D !",
            data: {
                lenght: heroes.length, 
                heroes
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            message:'Something didn\'t work :/',
            error
        });
    }
}

HeroController.createHero = async (req, res) => {
    // Create a Hero, show it on console and save it
    // Route : POST /api/Hero
    const newHero = new Hero(req.body);

    try {
        const createdHero = await newHero.save();
        const file = await File.findById(createdHero.imgId);
        // TODO get route of base and relative to it
        if(file){
            let newPath = path.normalize(__dirname+'../../../uploads/heroes/'+file.originalname);
            
            fs.rename(file.path, newPath, async (err) => {
                if(err){
                    console.log(err);
                } 
                else{
                    file.path = newPath
                    file.confirmed = true;
                    let resultFile = await file.save();
                    createdHero.imageFilename = resultFile.originalname;
                    let resultHero = await createdHero.save();
                    console.log({
                        message: 'Successfully moved',
                        resultFile,
                        resultHero
                    });
                } 
            })
        }

        res.json({
            message:'Hero created successfully :D !',
            data: {
                id: newHero.id,
                createdHero
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            message:'Something didn\'t work :/',
            error
        });
    }
}

HeroController.getHero = async (req, res) => {
    // Find a Hero using the ID at the URL 
    // Route : GET /api/Hero/e3fce456f4cfe654f
    try {
        const hero = await Hero.findById(req.params.id);
        res.json({
            message:"Here's the Hero you requested :D !",
            data: {
                hero
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            message:'Something didn\'t work :/',
            error
        });
    }
}

HeroController.editHero = async (req, res) => {
    // Edit a Hero using the ID at the URL 
    // Route : PUT /api/Hero/e3fce456f4cfe654f
    const { id } = req.params;
    updatedHero = {
        name: req.body.name,
        type: req.body.type
    };
    try {
        const updtHero = await Hero.findByIdAndUpdate(
            id,
            {
                $set: updatedHero
            },
            {
                new: true
            }
        );
        res.json({
            status: "Hero updated successfully :D !",
            data: {
                updatedHero: updtHero
            }
        })
    } catch (error) {
        console.log(error);
        res.json({
            message:'Something didn\'t work :/',
            error
        });
    }

}

HeroController.deleteHero = async (req, res) => {
    // Edit a Hero using the ID at the URL 
    // Route : DELETE /api/Hero/e3fce456f4cfe654f
    const { id } = req.params;
    try {
        await Hero.findByIdAndRemove(id);
        res.json({
            status: 'Hero removed successfully :D !',
            data: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            message:'Something didn\'t work :/',
            error
        });
    }
}

HeroController.uploadImg = async (req, res) => {
    try {
        let file = new File(req.file);
        file.relatedModel = 'Hero';

        let resultFile = await file.save();

        console.log({
            message: `Image for hero uploaded ! :D`,
            resultFile: resultFile
        });

        res.set('Content-Type', 'text/plain')
        res.send(req.file.filename)
    } catch (error) {
        console.log(error);

    }
}

HeroController.getUploadImg = async (req, res) => {
    const { imageId } = req.params;
    try {
        const file = await File.findOne({
            filename: imageId
        })

        res.json({
            message:"Here's the image file object you requested :D !",
            data: {
                file
            }
        });
    } catch (error) {
        console.log(error);
        res.json({
            message:'Something didn\'t work :/',
            error
        });
    }
}

module.exports = HeroController; 