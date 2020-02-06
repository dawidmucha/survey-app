const express = require('express')
const router = require('express').Router()
const cors = require('cors')
const mongoose = require('mongoose')
let Survey = require('./models/survey.model')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
	console.log('MongoDB database connectrion extablished successfully')
})

router.route('/survey4').post((req, res) => {
	const results = req.body.results
	
	const newSurvey = new Survey({
		results
	})

	newSurvey.save()
  .then(() => res.json('Survey added!'))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/results').get((req, res) => {
	// Survey.find().then(results => {
	// 	return res.json(results)
	// }).catch(err => res.status(400).json('Error: ', err))
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});