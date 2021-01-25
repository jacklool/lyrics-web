const router = require('express').Router();
let Exercise = require('../models/exercise-model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const description = res.body.description;
    const duration = Number(res.body.duration);
    const date = Date.parse(res.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
})

module.exports = router;

