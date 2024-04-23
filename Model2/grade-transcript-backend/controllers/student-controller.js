const Student = require('../models/student');

// Get all students
module.exports.getStudents = (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(500).send(err));
};

// Get a single student by ID
module.exports.getStudentById = (req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      if (student) res.json(student);
      else res.status(404).send('Student not found');
    })
    .catch((err) => res.status(500).send(err));
};

// Add a new student
module.exports.createStudent = (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save()
    .then((student) => res.status(201).json(student))
    .catch((err) => res.status(400).send(err));
};

// Update a student's information
module.exports.updateStudent = (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((student) => {
      if (student) res.json(student);
      else res.status(404).send('Student not found');
    })
    .catch((err) => res.status(400).send(err));
};

// Delete a student
module.exports.deleteStudent = (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((student) => {
      if (student) res.status(200).json({ message: 'Student deleted', student });
      else res.status(404).send('Student not found');
    })
    .catch((err) => res.status(500).send(err));
};
