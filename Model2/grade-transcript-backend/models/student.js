const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  grade: { type: String, required: true },
});

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grades: [GradeSchema], // List of grades for different subjects
});

module.exports = mongoose.model('Student', StudentSchema);
