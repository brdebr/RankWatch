const Map = require('../database/models/Map');
const File = require('../database/models/File');
var fs = require('fs');
var path = require('path');
const MapController = {};

MapController.getMaps = async (req, res) => {
    // Return all Maps
    // Route : GET /api/Maps
    try {
        const maps = await Map.find();
        res.json({
            message: "Here is a list of Maps :D !",
            data: {
                lenght: maps.length, 
                maps
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

MapController.createMap = async (req, res) => {
    // Create a Map, show it on console and save it
    // Route : POST /api/Map
    const newMap = new Map(req.body);

    try {
        const createdMap = await newMap.save();

        moveImgFromTemp(createdMap);

        res.json({
            message:'Map created successfully :D !',
            data: {
                id: newMap.id,
                createdMap
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

MapController.getMap = async (req, res) => {
    // Find a Map using the ID at the URL 
    // Route : GET /api/Map/e3fce456f4cfe654f
    try {
        const map = await Map.findById(req.params.id);
        res.json({
            message:"Here's the Map you requested :D !",
            data: {
                map
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

MapController.editMap = async (req, res) => {
    // Edit a Map using the ID at the URL 
    // Route : PUT /api/Map/e3fce456f4cfe654f
    const { id } = req.params;
    updatedMap = {
        name: req.body.name,
        type: req.body.type
    };
    try {
        if(req.body.imgId && req.body.imageFilename){
            await moveImgFromTemp(req.body);
        }
        const updtMap = await Map.findByIdAndUpdate(
            id,
            {
                $set: updatedMap
            },
            {
                new: true
            }
        );
        res.json({
            status: "Map updated successfully :D !",
            data: {
                updatedMap: updtMap
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

MapController.deleteMap = async (req, res) => {
    // Edit a Map using the ID at the URL 
    // Route : DELETE /api/Map/e3fce456f4cfe654f
    const { id } = req.params;
    try {
        await Map.findByIdAndRemove(id);
        res.json({
            status: 'Map removed successfully :D !',
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

MapController.uploadImg = async (req, res) => {
    try {
        let file = new File(req.file);
        file.relatedModel = 'Map';

        let resultFile = await file.save();

        console.log({
            message: `Image for map uploaded ! :D`,
            resultFile: resultFile
        });

        res.set('Content-Type', 'text/plain')
        res.send(req.file.filename)
    } catch (error) {
        console.log(error);

    }
}

MapController.getUploadImg = async (req, res) => {
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

async function moveImgFromTemp(createdMap) {
    try {
        if(typeof createdMap.save !== 'function'){
            const aux = {...createdMap}
            createdMap = await Map.findById(createdMap._id)
            createdMap.imgId = aux.imgId
            createdMap.imageFilename = aux.imageFilename
        }
    
        const file = await File.findById(createdMap.imgId);
        console.log(createdMap);
        console.log(file);
        
        // TODO get route of base and relative to it
        let newPath = path.normalize(__dirname+'../../../uploads/maps/'+file.originalname);
        
        fs.rename(file.path, newPath, async (err) => {
            if(err){
                console.log(err);
            } 
            else{
                file.path = newPath
                file.confirmed = true;
                let resultFile = await file.save();
                createdMap.imageFilename = resultFile.originalname;
                let resultMap = await createdMap.save();
                console.log({
                    message: 'Successfully moved',
                    resultFile,
                    resultMap
                });
            } 
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = MapController; 