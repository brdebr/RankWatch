const File = require('../database/models/File')
var path = require('path');

const FileController = {};

FileController.getFile = async (req, res) => {
    // Return a file
    const { id } = req.params;
    if(id){
        try {
            const file = await File.findOne({_id: id});
            res.download(file.path)
        } catch (error) {
            console.log(error);
            res.json({
                message:'Something didn\'t work :/',
                error
            });
        }
    }else{
        res.json({
            message:'Something didn\'t work :/',
        });
    }
}


module.exports = FileController; 