const Map = require('../database/models/Map');
const File = require('../database/models/File');
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
    const { id } = req.params;
    try {
        let file = new File(req.file);
        file.relatedModel = 'Map';
        file.relatedId = id;

        let resultFile = await file.save();

        let map = await Map.findById(id);
        let resultMap = await map.updateOne({imgUrl: req.file.filename});
        console.log({
            message: `Image for map ${map.name} updated ! :D`,
            mapStatus: resultMap
        });

        res.set('Content-Type', 'text/plain')
        res.send(req.file.filename)
    } catch (error) {
        console.log(error);

    }
}

module.exports = MapController; 