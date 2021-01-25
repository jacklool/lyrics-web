const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect mongoDB
// const uri  = process.env.ATLAS_URI;
const uri = "mongodb+srv://admin:1234@cluster0.jr97a.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established sucessfully");
});


// Router
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});