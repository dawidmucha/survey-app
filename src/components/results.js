import React, { Component } from 'react'
import axios from 'axios'
import update, { extend } from 'immutability-helper';
import Chart from "react-google-charts";
import styles from '../styles/Results.module.css'

const pieOptions = {
  title: "wowsee",
  pieHole: 0,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

export default class Results extends Component {
	constructor(props) {
		super(props)

		this.state = {
			results: [],
			fetched: false,

			age: [0, 0, 0, 0, 0, 0, 0], //under, teen, yadult, adult, sadult, senior, unspecified
			gender: [0, 0, 0, 0, 0, 0, 0], //cism, cisf, transm, transf, nb, other, unspecified
			ethnicity: [0, 0, 0, 0, 0, 0, 0, 0, 0], //caucasian, negroid, mongoloid, asian, filipino, native, latinx, other, unspecified
			education: [0, 0, 0, 0, 0, 0, 0, 0], //none, primary, secondary, bachelors, masters, doctorate, other, unspecified
			employment: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //full, part, unlook, un, student, retired, self, unable, other, unspecified

			pudding: [0, 0], //chocolate, vanilla
			chocolate: [0, 0], //dark, milk
			staple: [0, 0], //rice, potatoes
			hemisphere: [0, 0], //north, south
			framework: [0, 0], //react, angular
			english: [0, 0], //american, british

			shortest: '',
			longest: '',

			q1: [0, 0, 0, 0],
			q2: [0, 0, 0, 0],
			q3: [0, 0, 0, 0],
			q4: [0, 0, 0, 0],
			q5: [0, 0, 0, 0],
			q6: [0, 0, 0, 0],

			answers: [1, 0, 1, 0, 2, 1]
		}

		this.preparingResults = this.preparingResults.bind(this)
		this.incrementResults = this.incrementResults.bind(this)
	}
	
	componentDidMount() {
		this.props.updatePath()
		this.setState({fetched: false})
		axios.get('http://localhost:5000/results').then(response => {	
			console.log('response', response.data)
			this.setState({results: [...Object.values(response.data)]})
			this.setState({fetched: true})
			this.preparingResults()
			console.log(this.state)
		}).catch((err => console.log(err)))
	}

	incrementResults(field, position) {
		this.setState(state => ({
			[field]: update(state[field], {[position]: {$set: state[field][position]+1}})
		}))
	}

	preparingResults() {
		this.state.results.map(el => {
			//survey1
			switch(el.age) {
				case 'ageUnder': this.incrementResults('age', 0); break;
				case 'ageTeen': this.incrementResults('age', 1); break;
				case 'ageYadult': this.incrementResults('age', 2); break;
				case 'ageAdult': this.incrementResults('age', 3); break;
				case 'ageSadult': this.incrementResults('age', 4); break;
				case 'ageSenior': this.incrementResults('age', 5); break;
				case 'ageUndefined': this.incrementResults('age', 6); break;
				default: console.log('error')
			}
	
			switch(el.gender) {
				case 'gndrCism': this.incrementResults('gender', 0); break;
				case 'gndrCisf': this.incrementResults('gender', 1); break;
				case 'gndrTransm': this.incrementResults('gender', 2); break;
				case 'gndrTransf': this.incrementResults('gender', 3); break;
				case 'gndrNb': this.incrementResults('gender', 4); break;
				case 'gndrOther': this.incrementResults('gender', 5); break;
				case 'gndrUndefined': this.incrementResults('gender', 6); break;
				default: console.log('error')
			}

			switch(el.ethnicity) {
				case 'raceCaucasian': this.incrementResults('ethnicity', 0); break;
				case 'raceNegroid': this.incrementResults('ethnicity', 1); break;
				case 'raceMongoloid': this.incrementResults('ethnicity', 2); break;
				case 'raceAsian': this.incrementResults('ethnicity', 3); break;
				case 'raceFilipino': this.incrementResults('ethnicity', 4); break;
				case 'raceNative': this.incrementResults('ethnicity', 5); break;
				case 'raceLatinx': this.incrementResults('ethnicity', 6); break;
				case 'raceOther': this.incrementResults('ethnicity', 7); break;
				case 'raceUnspecified': this.incrementResults('ethnicity', 8); break;
				default: console.log('error')
			}

			switch(el.education) {
				case 'eduNone': this.incrementResults('education', 0); break;
				case 'eduPrimary': this.incrementResults('education', 1); break;
				case 'eduSecondary': this.incrementResults('education', 2); break;
				case 'eduBachelors': this.incrementResults('education', 3); break;
				case 'eduMasters': this.incrementResults('education', 4); break;
				case 'eduDoctorate': this.incrementResults('education', 5); break;
				case 'eduOther': this.incrementResults('education', 6); break;
				case 'eduUnspecified': this.incrementResults('education', 7); break;
				default: console.log('error')
			}

			switch(el.employment) {
				case 'emplFull': this.incrementResults('employment', 0); break;
				case 'emplPart': this.incrementResults('employment', 1); break;
				case 'emplUnLook': this.incrementResults('employment', 2); break;
				case 'emplUn': this.incrementResults('employment', 3); break;
				case 'emplStudent': this.incrementResults('employment', 4); break;
				case 'emplRetired': this.incrementResults('employment', 5); break;
				case 'emplSelf': this.incrementResults('employment', 6); break;
				case 'emplUnable': this.incrementResults('employment', 7); break;
				case 'emplOther': this.incrementResults('employment', 8); break;
				case 'emplUnspecified': this.incrementResults('employment', 9); break;
				default: console.log('error')
			}

			//survey2
			if(el.pudding === 'puddingChocolate') this.incrementResults('pudding', 0)
			else if(el.pudding === 'puddingVanilla') this.incrementResults('pudding', 1)
			
			if(el.chocolate === 'chocolateDark') this.incrementResults('chocolate', 0)
			else if(el.chocolate === 'chocolateMilk') this.incrementResults('chocolate', 1)
			
			if(el.staple === 'stapleRice') this.incrementResults('staple', 0)
			else if(el.staple === 'staplePotatoes') this.incrementResults('staple', 1)
			
			if(el.hemisphere === 'hemisphereN') this.incrementResults('hemisphere', 0)
			else if(el.hemisphere === 'hemisphereS') this.incrementResults('hemisphere', 1)
			
			if(el.framework === 'frameworkReact') this.incrementResults('framework', 0)
			else if(el.framework === 'frameworkAngular') this.incrementResults('framework', 1)

			if(el.english === 'engilshAmerican') this.incrementResults('english', 0)
			else if(el.english === 'englishBritish') this.incrementResults('english', 1)

			//survey3
			if(!this.state.shortest || (this.state.shortest.length > el.value.length)) {
				this.setState(state => ({
					shortest: el.value
				}))
			}
			
			if(this.state.longest.length < el.value.length) {
				this.setState(state => ({
					longest: el.value
				}))
			}

			//survey4
			switch(el.q1) {
				case 'q11': this.incrementResults('q1', 0); break;
				case 'q12': this.incrementResults('q1', 1); break;
				case 'q13': this.incrementResults('q1', 2); break;
				case 'q14': this.incrementResults('q1', 3); break;
				default: console.log('error')
			}

			switch(el.q2) {
				case 'q21': this.incrementResults('q2', 0); break;
				case 'q22': this.incrementResults('q2', 1); break;
				case 'q23': this.incrementResults('q2', 2); break;
				case 'q24': this.incrementResults('q2', 3); break;
				default: console.log('error')
			}

			switch(el.q3) {
				case 'q31': this.incrementResults('q3', 0); break;
				case 'q32': this.incrementResults('q3', 1); break;
				case 'q33': this.incrementResults('q3', 2); break;
				case 'q34': this.incrementResults('q3', 3); break;
				default: console.log('error')
			}

			switch(el.q4) {
				case 'q41': this.incrementResults('q4', 0); break;
				case 'q42': this.incrementResults('q4', 1); break;
				case 'q43': this.incrementResults('q4', 2); break;
				case 'q44': this.incrementResults('q4', 3); break;
				default: console.log('error')
			}

			switch(el.q5) {
				case 'q51': this.incrementResults('q5', 0); break;
				case 'q52': this.incrementResults('q5', 1); break;
				case 'q53': this.incrementResults('q5', 2); break;
				case 'q54': this.incrementResults('q5', 3); break;
				default: console.log('error')
			}

			switch(el.q6) {
				case 'q61': this.incrementResults('q6', 0); break;
				case 'q62': this.incrementResults('q6', 1); break;
				case 'q63': this.incrementResults('q6', 2); break;
				case 'q64': this.incrementResults('q6', 3); break;
				default: console.log('error')
			}
		})
	}

	render() {
		if(!this.state.fetched) {
			return (
				<div>
					<h1>LOADING...</h1>
				</div>
			)
		} else {
			return (
				<div className={styles.container}>
					<p className={styles.nOfParticipants}>A total of <strong>{this.state.results.length}</strong> people participated in this survey</p>
					<h3 className={styles.parts}>Part 1 - demopgraphics</h3>
					<div className={styles.survey1charts}>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["0-17", this.state.age[0]], ["18-24", this.state.age[1]], ["25-34", this.state.age[2]], ["35-50", this.state.age[3]], ["50-66", this.state.age[4]], ["67+", this.state.age[5]], ["Prefer not to answer", this.state.age[6]]]}
							options={pieOptions}
							graph_id="PieChart1"
							width={"auto"}
							height={"300px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["Cis Male", this.state.gender[0]], ["Cis Female", this.state.gender[1]], ["Trans male", this.state.gender[2]], ["Trans female", this.state.gender[3]], ["Genderqueer / Genderfluid / Non-binary", this.state.gender[4]], ["Other", this.state.gender[5]], ["Prefer not to answer", this.state.gender[6]]]}
							options={pieOptions}
							graph_id="PieChart2"
							width={"auto"}
							height={"300px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["Caucasian", this.state.gender[0]], ["Negroid", this.state.gender[1]], ["Mongoloid", this.state.gender[2]], ["Asian", this.state.gender[3]], ["Filipino", this.state.gender[4]], ["Native American", this.state.gender[5]], ["Latinx", this.state.gender[6]], ["Other", this.state.gender[7]], ["Prefer not to answer", this.state.gender[8]]]}
							options={pieOptions}
							graph_id="PieChart3"
							width={"auto"}
							height={"300px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["No education", this.state.education[0]], ["Primary Education", this.state.education[1]], ["Secondary Education", this.state.education[2]], ["Bachelor's degree", this.state.education[3]], ["Master's degree", this.state.education[4]], ["Doctorate", this.state.education[5]], ["Other", this.state.education[6]], ["Prefer not to answer", this.state.education[7]]]}
							options={pieOptions}
							graph_id="PieChart4"
							width={"auto"}
							height={"300px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["Full-time(40+ hours a week)", this.state.employment[0]], ["Part-time(less than 40 hours a week)", this.state.employment[1]], ["Unemployed (looking for job)", this.state.employment[2]], ["Unemployed (not looking for a job)", this.state.employment[3]], ["Student", this.state.employment[4]], ["Retired", this.state.employment[5]], ["Self-employed", this.state.employment[6]], ["Unable to work", this.state.employment[7]], ["Other", this.state.employment[7]], ["Prefer not to answer", this.state.employment[7]]]}
							options={pieOptions}
							graph_id="PieChart5"
							width={"auto"}
							height={"300px"}
							legend_toggle
						/>
					</div>
					
					<div>
						<h3 className={styles.parts}>Part 3 - Would you rather?</h3>
						<Chart
							width={'auto'}
							height={'300px'}
							chartType="BarChart"
							loader={<div>Loading Chart</div>}
							data={[
								['', 'Option 1', 'Option 2'],
								['Chocolate Pudding \n Vanilla Pudding', this.state.pudding[0], this.state.pudding[1]],
								['Dark Chocolate \n Milk Chocolate', this.state.chocolate[0], this.state.chocolate[1]],
								['Rice \n Potatoes', this.state.staple[0], this.state.staple[1]],
								['Northen Hemisphere \n Southen Hemisphere', this.state.hemisphere[0], this.state.hemisphere[1]],
								['React \n Angular', this.state.framework[0], this.state.framework[1]],
								['American English \n British English', this.state.english[0], this.state.english[1]],
							]}
							options={{
								title: 'Would you rather?',
								chartArea: { width: '50%', height: '90%' },
								series: {
									0: { axis: 'option1', visibleInLegend: false },
									1: { axis: 'option2', visibleInLegend: false }
								},
								axes: {
									x: {
										distance: {height: '30'}
									}
								}
							}}
							// For tests
							rootProps={{ 'data-testid': '1' }}
						/>
					</div>
	
					<div>
						<h3 className={styles.parts}>Part 3 - What would you do with $1000?</h3>
						<div>
							<h4 className={styles.subparts}>Shortest answer:</h4>
							<p className={styles.text}>{this.state.shortest}</p>
						</div>
						<div>
							<h4 className={styles.subparts}>Longest answer:</h4>
							<p className={styles.text}>{this.state.longest}</p>
						</div>
					</div>
					
					<div>
						<h3 className={styles.parts}>Part 4 - Don't Stop Me Now Trivia</h3>
						<p className={styles.annotation}>If the options don't add up to 100% that's because all numbers are rounded down</p>
						<ol>
							<li className={styles.answers}>
								<span className={styles.question}>What's Freddy floating around?</span><br />
								<br />
								dopamine {Math.floor(this.state.q1[0]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>ecstasy {Math.floor(this.state.q1[1]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								excitement {Math.floor(this.state.q1[2]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%<br />
								elecricity {Math.floor(this.state.q1[3]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li className={styles.answers}>
								<span className={styles.question}>He's a tiger doing what?</span><br />
								<br />
								<strong>defying the laws of gravity {Math.floor(this.state.q2[0]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								denying all of his cavities {Math.floor(this.state.q2[1]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%<br />
								drinking the juice of anitgravity {Math.floor(this.state.q2[2]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%<br />
								subdueing his creativity {Math.floor(this.state.q2[3]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li className={styles.answers}>
								<span className={styles.question}>He's a racing car passing by like who?</span><br />
								<br />
								Alexander the Great {Math.floor(this.state.q3[0]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>Lady Godiva {Math.floor(this.state.q3[1]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								Ayrton Senna {Math.floor(this.state.q3[2]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%<br />
								The Pope {Math.floor(this.state.q3[3]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li className={styles.answers}>
								<span className={styles.question}>He's a rocketship on his way where?</span><br />
								<br />
								<strong>to Mars {Math.floor(this.state.q4[0]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								to Pluto {Math.floor(this.state.q4[1]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%<br />
								to Uranus {Math.floor(this.state.q4[2]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%<br />
								to Venus {Math.floor(this.state.q4[3]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li className={styles.answers}>
								<span className={styles.question}>He's about to explode as what kind of a bomb?</span><br />
								<br />
								hydrogen bomb {Math.floor(this.state.q5[0]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%<br />
								nuclear bomb {Math.floor(this.state.q5[1]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>atomic bomb {Math.floor(this.state.q5[2]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								neutron bomb {Math.floor(this.state.q5[3]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li className={styles.answers}>
								<span className={styles.question}>He's travelling at what speed?</span><br />
								<br />
								the speed of a car {Math.floor(this.state.q6[0]/this.state.q6.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>the speed of light {Math.floor(this.state.q6[1]/this.state.q6.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								the speed of sound {Math.floor(this.state.q6[2]/this.state.q6.reduce((acc, val) => acc + val) * 100)}%<br />
								the speed of sight {Math.floor(this.state.q6[3]/this.state.q6.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
						</ol>
					</div>
				</div>
			)
		}
  }
}