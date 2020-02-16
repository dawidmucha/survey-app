import React from 'react'
import {withRouter} from 'react-router-dom'
const axios = require('axios')

class Survey4 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()

		for(let [key, value] of Object.entries(this.state)) {
			localStorage.setItem(key, value)
			console.log(key, value)
		}

		console.log({...localStorage})

		axios.post('http://localhost:5000/survey4', {
			...localStorage
		}).then((res) => console.log(res)).catch(err => console.log(err))

		this.props.history.push('/results')
	}

	componentDidMount() {
		this.props.updatePath()
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		const input = (question, answer, text) => {	 
			return (
				<div>
					<input type='radio' name={`q${question}`} id={`q${question}${answer}`} value={`q${question}${answer}`} onChange={this.onChange} />
					<label htmlFor={`q${question}`} id={`q${question}${answer}`}>{text}</label> <br />
				</div>	
			)
		}

		return (
			<div>
				<h1>Queen - Don't Stop Me Now trivia</h1>
				<p>I hope you're having a ball with this survey</p>

				<form onSubmit={this.onSubmit}>
					<div>
						<p>1. What's Freddy floating around?</p>
							
						{input('1', '1', 'Dopamine')}
						{input('1', '2', 'Ecstasy')}
						{input('1', '3', 'Excitement')}
						{input('1', '4', 'Elecricity')}
					</div>
					<div>
						<p>2. He's a tiger doing what?</p>
						
						{input('2', '1', 'defying the laws of gravity')}
						{input('2', '2', 'denying all of his cavities')}
						{input('2', '3', 'drinking the juice of anitgravity')}
						{input('2', '4', 'subdueing his creativity')}
					</div>
					<div>
						<p>3. He's a racing car passing by like who?</p>
							
						{input('3', '1', 'Alexander the Great')}
						{input('3', '2', 'Lady Godiva')}
						{input('3', '3', 'Ayrton Senna')}
						{input('3', '4', 'The Pope')}
					</div>
					<div>
						<p>4. He's a rocketship on his way where?</p>
							
						{input('4', '1', 'to Mars')}
						{input('4', '2', 'to Pluto')}
						{input('4', '3', 'to Uranus')}
						{input('4', '4', 'to Venus')}
					</div>
					<div>
						<p>5. He's about to explode as what kind of a bomb?</p>
							
						{input('4', '1', 'hydrogen bomb')}
						{input('4', '2', 'nuclear bomb')}
						{input('4', '3', 'atomic bomb')}
						{input('4', '4', 'neutron bomb')}
					</div>
					<div>
						<p>6. He's travelling at what speed?</p>
							
						{input('4', '1', 'the speed of a car')}
						{input('4', '2', 'the speed of light')}
						{input('4', '3', 'the speed of sound')}
						{input('4', '4', 'the speed of sight')}
					</div>
					
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
		)
	}
}

export default withRouter(Survey4)