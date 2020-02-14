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

	componentDidMount() {
		this.localStorage = {}
		console.log(this.localStorage)
	}

	render() {
		const input = (name, id, text) => {	 
			return (
				<div>
					<input type='radio' name={`${name}`} id={`${id}`} value={`${id}`} onChange={this.onChange} />
					<label htmlFor={`q${name}`}>{text}</label> <br />
				</div>	
			)
		}

		return (
			<div>
				<h1>Demographics</h1>
				<p>This part is not directly connected to the rest of the survey. It's only purpouse is to determine the demographic of the survey, which helps us find corelation and allows us to be confident with any conclusions that could be formed based on this survey. We understand you might not want to share some information with us, if so, feel free to select the "Prefer not to answer" option.</p>
				<form onSubmit={this.onSubmit}>
					<div>
						<p>Age</p>
						{input('age', 'ageUnder', '0-17')}
						{input('age', 'ageTeen', '18-24')}
						{input('age', 'ageYadult', '25-34')}
						{input('age', 'ageAdult', '35-50')}
						{input('age', 'ageSadult', '50-66')}
						{input('age', 'ageSenior', '67+')}
						{input('age', 'ageUnspecified', 'Prefer not to answer')}
					</div>	
					<div>
						<p>Gender</p>
						{input('gender', 'gndrCism', 'Cis Male')}
						{input('gender', 'gndrCisf', 'Cis Female')}
						{input('gender', 'gndrTransm', 'Trans male')}
						{input('gender', 'gndrTransf', 'Trans female')}
						{input('gender', 'gndrNb', 'Genderqueer / Genderfluid / Non-binary')}
						{input('gender', 'gndrOther', 'Other')}
						{input('gender', 'gndrUnspecified', 'Prefer not to answer')}
					</div>
					<div>
						<p>Ethnicity</p>
						{input('ethnicity', 'raceCaucasian', 'Caucasian')}
						{input('ethnicity', 'raceNegroid', 'Negroid')}
						{input('ethnicity', 'raceMongoloid', 'Mongoloid')}
						{input('ethnicity', 'raceAsian', 'Asian')}
						{input('ethnicity', 'raceFilipino', 'Filipino')}
						{input('ethnicity', 'raceNative', 'Other')}
						{input('ethnicity', 'raceLatinx', 'Native American')}
						{input('ethnicity', 'raceOther', 'Latinx')}
						{input('ethnicity', 'raceUnspecified', 'Prefer not to answer')}
					</div>
					<div>
						<p>Education</p>
						{input('education', 'eduNone', 'No education')}
						{input('education', 'eduPrimary', 'Primary Education')}
						{input('education', 'eduSecondary', 'Secondary Education')}
						{input('education', 'eduBachelors', 'Bachelor\'s degree')}
						{input('education', 'eduMasters', 'Bachelor\'s degree')}
						{input('education', 'eduDoctorate', 'Doctorate')}
						{input('education', 'eduOther', 'Other')}
						{input('education', 'eduUnspecified', 'Prefer not to answer')}
					</div>
					<div>
						<p>Employment</p>
						{input('employment', 'emplFull', 'Full-time(40+ hours a week)')}
						{input('employment', 'emplPart', 'Part-time(less than 40 hours a week)')}
						{input('employment', 'emplUnLook', 'Unemployed (looking for job)')}
						{input('employment', 'emplUn', 'Unemployed (not looking for a job)')}
						{input('employment', 'emplStudent', 'Student')}
						{input('employment', 'emplRetired', 'Retired')}
						{input('employment', 'emplSelf', 'Self-employed')}
						{input('employment', 'emplUnable', 'Unable to work')}
						{input('employment', 'emplOther', 'Other')}
						{input('employment', 'emplUnspecified', 'Prefer not to answer')}
					</div>
					<button type='submit'>NEXT</button>
				</form>
			</div>
		)
	}
}

export default Survey1