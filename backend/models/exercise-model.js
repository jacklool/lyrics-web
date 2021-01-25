const mogoose = require("mongoose");

const excerciseSchema = new mogoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
},{
    timestamps: true,
});

const Exercise = mogoose.model('Exercise', excerciseSchema);
module.exports = Exercise;