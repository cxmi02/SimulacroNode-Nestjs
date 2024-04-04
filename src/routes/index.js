const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/api/all/Students',  studentController.getAllStudents);
router.get('/api/id/Student/:id', studentController.getStudentById);
router.patch('/api/patch/Student/:id',  studentController.updateStudent);
router.post('/api/create/Student', studentController.createStudent);
router.delete('/api/delete/Student/:id', studentController.deleteStudent);



module.exports = router