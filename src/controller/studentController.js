const Student = require('../model/studentModel.js');

const studentController = {
    
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.json(students)
        } catch (error) {
            console.error('Error getting students', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    getStudentById: async (req, res) => {
        try {
            const { indentification } = req.params;
            const student = await Student.findOne({id: indentification});
            res.json(student)
        } catch (error) {
            console.error('Error bringing students', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    updateStudent: async (req, res) => {
        try {
            const { identification } = req.params;
            const { name, age } = req.body;
            const student = await Student.findOneAndUpdate({id: identification}, {$set: {name: name, age: age}});
            console.log(student);
            res.json(student)
        } catch (error) {
            console.error('Error updating students', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    createStudent: async (req, res) => {
        const studentData = req.body;
        try {
            const newStudent = new Student(studentData);
            const student = await newStudent.save();
            res.status(201).json(student);
        } catch (error) {
            console.error('Error creating students', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const { identification } = req.params;
            const studenDelete = await Student.findOneAndDelete({id: identification});
            res.json(studenDelete);
        } catch (error) {
            console.error('Error deleting students', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }
}

module.exports = studentController;