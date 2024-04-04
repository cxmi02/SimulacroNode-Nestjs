const mongoose = require('mongoose');
let Student;

const connectDatabase = async () => {
    try {
        if (!Student) {
            Student = mongoose.model('simulacro/Students', require('../model/studentModel').schema); //comple
        };

        await mongoose.connect('mongodb+srv://sepulvedagiraldocamila:IAw9xmtt7wXcTtIL@db-1.idpnodb.mongodb.net/')
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

const initializeData = async () => {
    try {
        await Student.deleteMany();

        const StudentData = [
            {
                name: 'Bibiana',
                identification: '1234',
                age: 21
            },
            {
                name: 'Mauricio',
                identification: '5678',
                age: 25
            }
        ];

        await Student.insertMany(StudentData);
        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;