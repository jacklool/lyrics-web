const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: { type: String, require: true },
    artist: {type: String, require: true },
    video: { type: String, require: true },
    lyric: { type: String, require: true },
    
},{
    timestamps: true,
});

const Lyrics = mongoose.model('Lyrics', songSchema);
module.exports = Lyrics;