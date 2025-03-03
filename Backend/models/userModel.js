const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    socialHandle: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
});

module.exports = mongoose.model('User', userSchema);
