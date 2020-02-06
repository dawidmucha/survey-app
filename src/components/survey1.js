import React from 'react'

class Survey1 extends React.Component {
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

		this.props.history.push('/survey2')
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div>
				<h1>Demographics</h1>
				<p>This part is not directly connected to the rest of the survey. It's only purpouse is to determine the demographic of the survey, which helps us find corelation and allows us to be confident with any conclusions that could be formed based on this survey. We understand you might not want to share some information with us, if so, feel free to select the "Prefer not to answer" option.</p>
				<form onSubmit={this.onSubmit}>
					<div>
						<p>Age</p>
					
						<input type='radio' name='age' id='ageUnder' value='ageUnder' onChange={this.onChange} />
						<label htmlFor='ageUnder'>0-17</label> <br />

						<input type='radio' name='age' id='ageTeen' value='ageTeen' onChange={this.onChange} />
						<label htmlFor='ageTeen'>18-24</label> <br />

						<input type='radio' name='age' id='ageYadult' value='ageYadult' onChange={this.onChange} />
						<label htmlFor='ageYadult'>25-34</label> <br />

						<input type='radio' name='age' id='ageAdult' value='ageAdult' onChange={this.onChange} />
						<label htmlFor='ageAdult'>35-50</label> <br />

						<input type='radio' name='age' id='ageSadult' value='ageSadult' onChange={this.onChange} />
						<label htmlFor='aageSadultge'>50-66</label> <br />

						<input type='radio' name='age' id='ageSenior' value='ageSenior' onChange={this.onChange} />
						<label htmlFor='ageSenior'>67+</label> <br />
						
						<input type='radio' name='age' id='ageUnspecified' value='ageUnspecified' onChange={this.onChange} />
						<label htmlFor='ageUnspecified'>Prefer not to answer</label> <br />
					</div>	
					<div>
						<p>Gender</p>
						
						<input type='radio' name='gender' id='gndrCism' value='gndrCism' onChange={this.onChange} />
						<label htmlFor='gndrCism'>Cis Male</label> <br />

						<input type='radio' name='gender' id='gndrCisf' value='gndrCisf' onChange={this.onChange} />
						<label htmlFor='gndrCisf'>Cis Female</label> <br />

						<input type='radio' name='gender' id='gndrTransm' value='gndrTransm' onChange={this.onChange} />
						<label htmlFor='gndrTransm'>Trans male</label> <br />

						<input type='radio' name='gender' id='gndrTransf' value='gndrTransf' onChange={this.onChange} />
						<label htmlFor='gndrTransf'>Trans female</label> <br />

						<input type='radio' name='gender' id='gndrNb' value='gndrNb' onChange={this.onChange} />
						<label htmlFor='gndrNb'>Genderqueer / Genderfluid / Non-binary</label> <br />

						<input type='radio' name='gender' id='gndrOther' value='gndrOther' onChange={this.onChange} />
						<label htmlFor='gndrOther'>Other</label> <br />
						
						<input type='radio' name='gender' id='gndrUnspecified' value='gndrUnspecified' onChange={this.onChange} />
						<label htmlFor='gndrUnspecified'>Prefer not to answer</label> <br />
					</div>
					<div>
						<p>Ethnicity</p>
							
						<input type='radio' name='ethnicity' id='raceCaucasian' value='raceCaucasian' onChange={this.onChange} />
						<label htmlFor='raceCaucasian'>Caucasian</label> <br />

						<input type='radio' name='ethnicity' id='raceNegroid' value='raceNegroid' onChange={this.onChange} />
						<label htmlFor='raceNegroid'>Negroid</label> <br />

						<input type='radio' name='ethnicity' id='raceMongoloid' value='raceMongoloid' onChange={this.onChange} />
						<label htmlFor='raceMongoloid'>Mongoloid</label> <br />

						<input type='radio' name='ethnicity' id='raceAsian' value='raceAsian' onChange={this.onChange} />
						<label htmlFor='raceAsian'>Asian</label> <br />

						<input type='radio' name='ethnicity' id='raceFilipino' value='raceFilipino' onChange={this.onChange} />
						<label htmlFor='raceFilipino'>Filipino</label> <br />

						<input type='radio' name='ethnicity' id='raceNative' value='raceNative' onChange={this.onChange} />
						<label htmlFor='raceNative'>Native American</label> <br />

						<input type='radio' name='ethnicity' id='raceLatinx' value='raceLatinx' onChange={this.onChange} />
						<label htmlFor='raceLatinx'>Latinx</label> <br />

						<input type='radio' name='ethnicity' id='raceOther' value='raceOther' onChange={this.onChange} />
						<label htmlFor='raceOther'>Other</label> <br />
						
						<input type='radio' name='ethnicity' id='raceUnspecified' value='raceUnspecified' onChange={this.onChange} />
						<label htmlFor='raceUnspecified'>Prefer not to answer</label> <br />
					</div>
					<div>
						<p>Education</p>
							
						<input type='radio' name='education' id='eduNone' value='eduNone' onChange={this.onChange} />
						<label htmlFor='eduNone'>No education</label> <br />

						<input type='radio' name='education' id='eduPrimary' value='eduPrimary' onChange={this.onChange} />
						<label htmlFor='eduPrimary'>Primary Education</label> <br />

						<input type='radio' name='education' id='eduSecondary' value='eduSecondary' onChange={this.onChange} />
						<label htmlFor='eduSecondary'>Secondary Education</label> <br />

						<input type='radio' name='education' id='eduBachelors' value='eduBachelors' onChange={this.onChange} />
						<label htmlFor='eduBachelors'>Bachelor's degree</label> <br />

						<input type='radio' name='education' id='eduMasters' value='eduMasters' onChange={this.onChange} />
						<label htmlFor='eduMasters'>Master's degree</label> <br />

						<input type='radio' name='education' id='eduDoctorate' value='eduDoctorate' onChange={this.onChange} />
						<label htmlFor='eduDoctorate'>Doctorate</label> <br />

						<input type='radio' name='education' id='eduOther' value='eduOther' onChange={this.onChange} />
						<label htmlFor='eduOther'>Other</label> <br />

						<input type='radio' name='education' id='eduUnspecified' value='eduUnspecified' onChange={this.onChange} />
						<label htmlFor='eduUnspecified'>Prefer not to answer</label> <br />
					</div>
					<div>
						<p>Employment</p>
							
						<input type='radio' name='employment' id='emplFull' value='emplFull' onChange={this.onChange} />
						<label htmlFor='emplFull'>Full-time(40+ hours a week)</label> <br />

						<input type='radio' name='employment' id='emplPart' value='emplPart' onChange={this.onChange} />
						<label htmlFor='emplPart'>Part-time(less than 40 hours a week)</label> <br />

						<input type='radio' name='employment' id='emplUnLook' value='emplUnLook' onChange={this.onChange} />
						<label htmlFor='emplUnLook'>Unemployed (looking for job)</label> <br />

						<input type='radio' name='employment' id='emplUn' value='emplUn' onChange={this.onChange} />
						<label htmlFor='emplUn'>Unemployed (not looking for a job)</label> <br />

						<input type='radio' name='employment' id='emplStudent' value='emplStudent' onChange={this.onChange} />
						<label htmlFor='emplStudent'>Student</label> <br />

						<input type='radio' name='employment' id='emplRetired' value='emplRetired' onChange={this.onChange} />
						<label htmlFor='emplRetired'>Retired</label> <br />

						<input type='radio' name='employment' id='emplSelf' value='emplSelf' onChange={this.onChange} />
						<label htmlFor='emplSelf'>Self-employed</label> <br />

						<input type='radio' name='employment' id='emplUnable' value='emplUnable' onChange={this.onChange} />
						<label htmlFor='emplUnable'>Unable to work</label> <br />

						<input type='radio' name='employment' id='emplOther' value='emplOther' onChange={this.onChange} />
						<label htmlFor='emplOther'>Other</label> <br />

						<input type='radio' name='employment' id='emplUnspecified' value='emplUnspecified' onChange={this.onChange} />
						<label htmlFor='emplUnspecified'>Prefer not to answer</label> <br />
					</div>
					<button type='submit'>NEXT</button>

				</form>
			</div>
		)
	}
}

export default Survey1