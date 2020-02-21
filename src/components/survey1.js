import React from 'react'
import {withRouter} from 'react-router-dom'
import styles from '../styles/survey.module.css'

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
		this.props.updatePath()
	}

	render() {
		const input = (name, id, text) => {	 
			return (
				<div>
					<label htmlFor={`${id}`} className={styles.element}>
						<input type='radio' name={`${name}`} id={`${id}`} value={`${id}`} onChange={this.onChange} />
						<span className={styles.customInput} />
						<span>{text}</span> <br />
					</label>	<br />
				</div>
			)
		}

		return (
			<div className={styles.container}>
				<h1>Demographics</h1>
				<p>This part is not directly connected to the rest of the survey. It's only purpouse is to determine the demographic of the survey, which helps us find corelation and allows us to be confident with any conclusions that could be formed based on this survey. We understand you might not want to share some information with us, if so, feel free to select the "Prefer not to answer" option.</p>
				<form className={styles.form} onSubmit={this.onSubmit}>
					<div>
						<h3 className={styles.category}>Age</h3>
						{input('age', 'ageUnder', '0-17')}
						{input('age', 'ageTeen', '18-24')}
						{input('age', 'ageYadult', '25-34')}
						{input('age', 'ageAdult', '35-50')}
						{input('age', 'ageSadult', '50-66')}
						{input('age', 'ageSenior', '67+')}
						{input('age', 'ageUnspecified', 'Prefer not to answer')}
					</div>	
					<div>
						<h3 className={styles.category}>Gender</h3>
						{input('gender', 'gndrCism', 'Cis Male')}
						{input('gender', 'gndrCisf', 'Cis Female')}
						{input('gender', 'gndrTransm', 'Trans male')}
						{input('gender', 'gndrTransf', 'Trans female')}
						{input('gender', 'gndrNb', 'Genderqueer / Genderfluid / Non-binary')}
						{input('gender', 'gndrOther', 'Other')}
						{input('gender', 'gndrUnspecified', 'Prefer not to answer')}
					</div>
					<div>
						<h3 className={styles.category}>Ethnicity</h3>
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
						<h3 className={styles.category}>Education</h3>
						{input('education', 'eduNone', 'No education')}
						{input('education', 'eduPrimary', 'Primary Education')}
						{input('education', 'eduSecondary', 'Secondary Education')}
						{input('education', 'eduBachelors', 'Bachelor\'s degree')}
						{input('education', 'eduMasters', 'Master\'s degree')}
						{input('education', 'eduDoctorate', 'Doctorate')}
						{input('education', 'eduOther', 'Other')}
						{input('education', 'eduUnspecified', 'Prefer not to answer')}
					</div>
					<div>
						<h3 className={styles.category}>Employment</h3>
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
					<button className={styles.button} type='submit'>NEXT</button>
				</form>
			</div>
		)
	}
}

export default withRouter(Survey1)