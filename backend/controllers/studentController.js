const Student = require('../models/studentModel');


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


 module.exports = {
    createStudent,
    getAllStudents,
 }