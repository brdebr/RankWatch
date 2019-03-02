const Match = require('../database/models/Match');
const MatchController = {};

MatchController.getMatches = async (req, res) => {
    // Return all Matchs
    // Route : GET /api/Matchs
    try {
        const matches = await Match.find();
        res.json({
            message: "Here is a list of matches :D !",
            data: {
                lenght: matches.length, 
                matches
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

MatchController.createMatch = async (req, res) => {
    // Create a Match, show it on console and save it
    // Route : POST /api/Match
    const newMatch = new Match(req.body);
    try {
        const createdMatch = await newMatch.save();
        res.json({
            message:'Match created successfully :D !',
            data: {
                id: newMatch.id,
                createdMatch
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

MatchController.getMatch = async (req, res) => {
    // Find a Match using the ID at the URL 
    // Route : GET /api/Match/e3fce456f4cfe654f
    try {
        const match = await Match.findById(req.params.id);
        res.json({
            message:"Here's the Match you requested :D !",
            data: {
                match
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

MatchController.editMatch = async (req, res) => {
    // Edit a Match using the ID at the URL 
    // Route : PUT /api/Match/e3fce456f4cfe654f
    const { id } = req.params;
    updatedMatch = {
        name: req.body.name,
        type: req.body.type
    };
    try {
        const updtMatch = await Match.findByIdAndUpdate(
            id,
            {
                $set: updatedMatch
            },
            {
                new: true
            }
        );
        res.json({
            status: "Match updated successfully :D !",
            data: {
                updatedMatch: updtMatch
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

MatchController.deleteMatch = async (req, res) => {
    // Edit a Match using the ID at the URL 
    // Route : DELETE /api/Match/e3fce456f4cfe654f
    const { id } = req.params;
    try {
        await Match.findByIdAndRemove(id);
        res.json({
            status: 'Match removed successfully :D !',
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

module.exports = MatchController; 