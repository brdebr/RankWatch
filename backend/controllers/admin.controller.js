const dirTree = require("directory-tree");
var path = require('path')
var fs = require('fs')

exports.filestree = (req, res, next) => {
    const tree = dirTree(path.normalize(__dirname + '../../../uploads'))
    res.json({
        message:'Here is a the tree list of uploads ! :D',
        tree
    })
}

exports.deletefile = async (req, res, next) => {
    
    await fs.unlink(req.body.path, function (err) {
        if(err){
            res.json({
                message:'Something didn\'t work :/',
            })
        }
    })
    res.json({
        message:'File deleted successfully ! :D',
        file: req.body.path
    })
}