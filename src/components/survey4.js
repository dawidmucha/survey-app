import React from 'react'

class Survey3 extends React.Component {
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

		this.props.history.push('/results')
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		return (
			<div>
				<h1>Queen - Don't Stop Me Now trivia</h1>
				<p>I hope you're having a ball with this survey</p>

				<form onSubmit={this.onSubmit}>
					<div>
						<p>1. What's Freddy floating around?</p>
							
						<input type='radio' name='q1' id='q11' value='q11' onChange={this.onChange} />
						<label htmlFor='q11'>Dopamine</label> <br />

						<input type='radio' name='q1' id='q12' value='q12' onChange={this.onChange} />
						<label htmlFor='q12'>Ecstasy</label> <br />

						<input type='radio' name='q1' id='q13' value='q13' onChange={this.onChange} />
						<label htmlFor='q13'>Excitement</label> <br />

						<input type='radio' name='q1' id='q14' value='q14' onChange={this.onChange} />
						<label htmlFor='q14'>Elecricity</label> <br />
					</div>
					<div>
						<p>2. He's a tiger doing what?</p>
							
						<input type='radio' name='q2' id='q21' value='q21' onChange={this.onChange} />
						<label htmlFor='q21'>defying the laws of gravity</label> <br />

						<input type='radio' name='q2' id='q22' value='q22' onChange={this.onChange} />
						<label htmlFor='q22'>denying all of his cavities</label> <br />

						<input type='radio' name='q2' id='q23' value='q23' onChange={this.onChange} />
						<label htmlFor='q23'>drinking the juice of anitgravity</label> <br />

						<input type='radio' name='q2' id='q24' value='q24' onChange={this.onChange} />
						<label htmlFor='q24'>subdueing his creativity</label> <br />
					</div>
					<div>
						<p>3. He's a racing car passing by like who?</p>
							
						<input type='radio' name='q3' id='q31' value='q31' onChange={this.onChange} />
						<label htmlFor='q11'>Alexander the Great</label> <br />

						<input type='radio' name='q3' id='q32' value='q32' onChange={this.onChange} />
						<label htmlFor='q32'>Lady Godiva</label> <br />

						<input type='radio' name='q3' id='q33' value='q33' onChange={this.onChange} />
						<label htmlFor='q33'>Ayrton Senna</label> <br />

						<input type='radio' name='q3' id='q34' value='q34' onChange={this.onChange} />
						<label htmlFor='q34'>The Pope</label> <br />
					</div>
					<div>
						<p>4. He's a rocketship on his way where?</p>
							
						<input type='radio' name='q4' id='q41' value='q41' onChange={this.onChange} />
						<label htmlFor='q41'>to Mars</label> <br />

						<input type='radio' name='q4' id='q42' value='q42' onChange={this.onChange} />
						<label htmlFor='q42'>to Pluto</label> <br />

						<input type='radio' name='q4' id='q43' value='q43' onChange={this.onChange} />
						<label htmlFor='q43'>to Uranus</label> <br />

						<input type='radio' name='q4' id='q44' value='q44' onChange={this.onChange} />
						<label htmlFor='q44'>to Venus</label> <br />
					</div>
					<div>
						<p>5. He's about to explode as what kind of a bomb?</p>
							
						<input type='radio' name='q5' id='q51' value='q51' onChange={this.onChange} />
						<label htmlFor='q51'>hydrogen bomb</label> <br />

						<input type='radio' name='q5' id='q52' value='q52' onChange={this.onChange} />
						<label htmlFor='q52'>nuclear bomb</label> <br />

						<input type='radio' name='q5' id='q53' value='q53' onChange={this.onChange} />
						<label htmlFor='q53'>atomic bomb</label> <br />

						<input type='radio' name='q5' id='q54' value='q54' onChange={this.onChange} />
						<label htmlFor='q54'>neutron bomb</label> <br />
					</div>
					<div>
						<p>6. He's travelling at what speed?</p>
							
						<input type='radio' name='q6' id='q61' value='q61' onChange={this.onChange} />
						<label htmlFor='q61'>the speed of a car</label> <br />

						<input type='radio' name='q6' id='q62' value='q62' onChange={this.onChange} />
						<label htmlFor='q62'>the speed of light</label> <br />

						<input type='radio' name='q6' id='q63' value='q63' onChange={this.onChange} />
						<label htmlFor='q63'>the speed of sound</label> <br />

						<input type='radio' name='q6' id='q64' value='q64' onChange={this.onChange} />
						<label htmlFor='q64'>the speed of sight</label> <br />
					</div>
					
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
		)
	}
}

export default Survey3