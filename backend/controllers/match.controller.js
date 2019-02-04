const Match = require('../database/models/Match');
const MatchController = {};

MatchController.getMatches = async (req, res) => {
    // Return all Matchs
    // Route : GET /api/Matchs
    const matches = await Match.find();
    res.json({
        message: "Here is a list of matches :D !",
        data: {
            lenght: matches.length, 
            matches
        }
    });
}

MatchController.createMatch = async (req, res) => {
    // Create a Match, show it on console and save it
    // Route : POST /api/Match
    const newMatch = new Match(req.body);
    await newMatch.save();
    res.json({
        message:'Match created successfully :D !',
        data: {
            id: newMatch.id
        }
    });
}

MatchController.getMatch = async (req, res) => {
    // Find a Match using the ID at the URL 
    // Route : GET /api/Match/e3fce456f4cfe654f
    const match = await Match.findById(req.params.id);
    res.json({
        message:"Here's the Match you requested :D !",
        data: {
            match
        }
    });
}

MatchController.editMatch = async (req, res) => {
    // Edit a Match using the ID at the URL 
    // Route : PUT /api/Match/e3fce456f4cfe654f
    const { id } = req.params;
    updatedMatch = {
        name: req.body.name,
        type: req.body.type
    };
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
}

MatchController.deleteMatch = async (req, res) => {
    // Edit a Match using the ID at the URL 
    // Route : DELETE /api/Match/e3fce456f4cfe654f
    const { id } = req.params;
    await Match.findByIdAndRemove(id);
    res.json({
        status: 'Match removed successfully :D !',
        data: {
            id
        }
    });
}

module.exports = MatchController; 