const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
});

UserSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.comparePassword = function (password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = mongoose.model('User',UserSchema);