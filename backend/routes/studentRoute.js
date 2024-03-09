const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes
router.post('/poststudents', studentController.createStudent);
router.get('/getstudents', studentController.getAllStudents);
router.delete('/students/:id', studentController.deleteStudentById);

module.exports = router;
