const dirTree = require("directory-tree");
var path = require('path')
var fs = require('fs')
const File = require('../database/models/File')

exports.filestree = (req, res, next) => {
    const tree = dirTree(path.normalize(__dirname + '../../../uploads'))
    res.json({
        message:'Here is a the tree list of uploads ! :D',
        tree
    })
}

exports.deletefile = async (req, res, next) => {
    const { imageId } = req.params;
    let file = {}
    if(req.body.path){
        file = await File.findOne({path: req.body.path})
    }else{
        file = await File.findById(imageId)
    }
    if(file){
        await fs.unlink(file.path, function (err) {
            if(err){
                res.json({
                    message:'Something didn\'t work :/',
                })
            }
        })
        await file.remove()
        res.json({
            message:'File deleted successfully ! :D',
            file: req.body.path
        })
    }else{
        res.json({
            message:'Something didn\'t work :/',
        });
    }
}