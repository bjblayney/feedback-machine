const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring - mongoose object has prop schema, assign it to new var Schema

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);