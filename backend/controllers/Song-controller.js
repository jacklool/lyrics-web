let Song = require('../models/Song');

exports.getSongs = (req, res) => {
    Song.find()
        .then(songs => res.json(songs))
        .catch(err => res.status(404).json('Error:' + err));
};

exports.getSongById = (req, res) => {
    Song.findById(req.params.id)
        .then(song => res.json(song))
        .catch(err => res.status(404).json('Error: ' + err));  
}

exports.addSong = (req, res) => {
    const name = req.body.name;
    const artist = req.body.artist;
    const video = req.body.video;
    const lyric = req.body.lyric;

    const newSong = new Lyric({
        name,
        artist,
        lyric,
        video,
    });

    newSong.save()
        .then(() => res.json('Song added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.updateSong = (req, res) => {
    Lyric.findById(req.params.id)
        .then(song => {
            song.name = req.body.name,
            song.artist = req.body.artist,
            song.video = req.body.video,
            song.lyric = req.body.lyric,

            song.save()
                .then(() => res.json('Song updated!.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}