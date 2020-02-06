const router = require('express').Router()
let Survey = require('../models/survey.model')

router.route('/survey4').post((req, res) => {
	const results = req.body.results
	const age = req.body.age
	const gender = req.body.gender
	const education = req.body.education
	const q1 = req.body.q1
	const q3 = req.body.q3
	const hemisphere = req.body.hemisphere
	const q4 = req.body.q4
	const chocolate = req.body.chocolate
	const ethnicity = req.body.ethnicity
	const employment = req.body.employment
	const english = req.body.english
	const q5 = req.body.q5
	const value = req.body.value
	const q6 = req.body.q6
	const staple = req.body.staple
	const pudding = req.body.pudding
	const q2 = req.body.q2
	const framework = req.body.framework
	
	const newSurvey = new Survey({
		age, gender, education, q1, q3, hemisphere, q4, chocolate, ethnicity, employment, english, q5, value, q6, staple, pudding, q2, framework
	})

	newSurvey.save()
  .then(() => res.json('Survey added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/results').get((req, res) => {
	Survey.find().then(results => {
		return res.json(results)
	}).catch(err => res.status(400).json('Error: ', err))
})

module.exports = router