const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const user = require('./routes/api/users');


// Conncet to MongoDB database
const db = config.database

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))


// Initialize Express
const app = express();


// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser Middleware
app.use(express.json());

// Input Routes
app.use('/users', user);


app.listen (port, () => {
    console.log(`Server started on port ${port}`)
});