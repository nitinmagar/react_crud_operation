const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Connect to your MongoDB database 
mongoose.connect('mongodb://127.0.0.1:27017/college_db');
const db = mongoose.connection;

// Set up routes
app.use('/api', studentRoutes);

//app.use('/api/getstudents', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
