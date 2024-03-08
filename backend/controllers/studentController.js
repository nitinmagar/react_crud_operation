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
      

 module.exports = {
    createStudent
 }