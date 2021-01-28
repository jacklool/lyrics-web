const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');

const songController = require('./controllers/Song-controller');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// connect mongoDB
// const uri  = process.env.ATLAS_URI;
const uri = "mongodb+srv://admin:1234@cluster0.jr97a.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.on('error',console.error.bind(console, 'connection error:'));
connection.once('open', ()=> {
    console.log("MongoDB database connection established sucessfully");
});

// Router
app.get('/', function(req,res){
    res.send('welcome to home page');
});

app.get('/lyric', songController.getSongs);
app.get('/lyric/:id', songController.getSongById);
app.post('/lyric/add', songController.addSong);
app.post('/lyric/update/:id', songController.updateSong);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});