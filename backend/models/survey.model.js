const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
  age: { type: String, required: true},
  gender: { type: String, required: true},
  education: { type: String, required: true},
  q1: { type: String, required: true},
  q3: { type: String, required: true},
  hemisphere: { type: String, required: true},
  q4: { type: String, required: true},
  chocolate: { type: String, required: true},
  ethnicity: { type: String, required: true},
  employment: { type: String, required: true},
  english: { type: String, required: true},
  q5: { type: String, required: true},
  value: { type: String, required: true},
  q6: { type: String, required: true},
  staple: { type: String, required: true},
  pudding: { type: String, required: true},
  q2: { type: String, required: true},
  framework: { type: String, required: true}
}, {
  timestamps: true,
});

const Survey = mongoose.model('Exercise', surveySchema);

module.exports = Survey;