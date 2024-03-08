const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    class: String,
    address: String
});

const Students = mongoose.model('Students', studentSchema, 'students');

module.exports = Students;
