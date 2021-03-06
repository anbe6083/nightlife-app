const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    twitterId: String,
    name: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;