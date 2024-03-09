const Student = require('../models/studentModel');
const mongoose = require('mongoose');


// Handle the form submission
const createStudent = (req, res) => {
  const studentData = req.body;
  const newStudent = new Student(studentData);
  newStudent.save()
    .then(() => {
      res.json({ message: 'Data saved successfully in tbl_student collection.' });
    })
    .catch((err) => {
      console.error('Error saving data to the database:', err);
      res.status(500).json({ error: 'Error saving data to the database.' });
    });
};
   

//get student list
const getAllStudents = (req, res) => {
  Student.find({})
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data from the database.' });
    });
};


const deleteStudentById = (req, res) => {
  const studentId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(studentId)) {
    return res.status(400).json({ error: 'Invalid student ID' });
  }

  Student.findOneAndDelete({ _id: studentId })
    .then((student) => {
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json({ message: 'Student deleted successfully' });
    })
    .catch((err) => {
      console.error('Error deleting student:', err);
      res.status(500).json({ error: 'Error deleting student' });
    });
};


 module.exports = {
    createStudent,
    getAllStudents,
    deleteStudentById
 }