const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = new Schema({
  demographics: { type: Object, required: true, properties: {
		age: { type: Number, required: true},
		gender: { type: String, required: true},
		ethnicity: { type: String, required: true},
		education: { type: String, required: true},
		employment: { type: String, required: true},
		country: { type: String, required: true},
	}},
	wouldYouRather: { type: Object, required: true, properties: {
		pudding: { type: Number, required: true},
		chocolate: { type: String, required: true},
		dinner: { type: String, required: true},
		direction: { type: String, required: true},
		employment: { type: String, required: true},
		language: { type: String, required: true},
	}},
	howdYouSpend: {type: String, required: true },
	dontStopMeNow: { type: Object, required: true, properties: {
		floating: { type: Number, required: true },
		tiger: { type: Number, required: true },
		racing: { type: Number, required: true },
		rocketship: { type: Number, required: true },
		explode: { type: Number, required: true },
		travelling: { type: Number, required: true },
	}}
}, {
  timestamps: true,
});

const Survey = mongoose.model('Exercise', surveySchema);

module.exports = Survey;