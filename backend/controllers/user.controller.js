const User = require('../database/models/User');
const UserController = {};

UserController.getUsers = async (req, res) => {
    // Return all Matchs
    // Route : GET /api/Matchs
    try {
        const users = await User.find({},"username email")
        
        res.json({
            message: "Here is a list of users :D !",
            users
        });

    } catch (error) {

        console.log(error);

    }
}

module.exports = UserController; 