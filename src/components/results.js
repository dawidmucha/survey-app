import React, { Component } from 'react'
import axios from 'axios'
import update, { extend } from 'immutability-helper';
import Chart from "react-google-charts";

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
	}
	
	componentDidMount() {
		this.setState({fetched: false})
		axios.get('http://localhost:5000/results').then(response => {	
		console.log('response', response.data)
			this.setState({results: [...Object.values(response.data)]})
			this.setState({fetched: true})
			this.preparingResults()
			console.log(this.state)
		}).catch((err => console.log(err)))
	}

	preparingResults() {
		this.state.results.map(el => {
			//survey1
			switch(el.age) {
				case 'ageUnder': 
					this.setState(state => ({
						age: update(state.age, {0: {$set: state.age[0]+1}})
					}))
					break;
					case 'ageTeen': 
					this.setState(state => ({
						age: update(state.age, {1: {$set: state.age[1]+1}})
					}))
					break;
					case 'ageYadult': 
					this.setState(state => ({
						age: update(state.age, {2: {$set: state.age[2]+1}})
					}))
					break;
					case 'ageAdult': 
					this.setState(state => ({
						age: update(state.age, {3: {$set: state.age[3]+1}})
					}))
					break;
					case 'ageSadult': 
					this.setState(state => ({
						age: update(state.age, {4: {$set: state.age[4]+1}})
					}))
					break;
					case 'ageSenior': 
					this.setState(state => ({
						age: update(state.age, {5: {$set: state.age[5]+1}})
					}))
					break;
					case 'ageUndefined': 
					this.setState(state => ({
						age: update(state.age, {6: {$set: state.age[6]+1}})
					}))
					break;
					default: console.log('error')
			}
	
			switch(el.gender) {
				case 'gndrCism': 
					this.setState(state => ({
						gender: update(state.gender, {0: {$set: state.gender[0]+1}})
					}))
					break;
					case 'gndrCisf': 
					this.setState(state => ({
						gender: update(state.gender, {1: {$set: state.gender[1]+1}})
					}))
					break;
					case 'gndrTransm': 
					this.setState(state => ({
						gender: update(state.gender, {2: {$set: state.gender[2]+1}})
					}))
					break;
					case 'gndrTransf': 
					this.setState(state => ({
						gender: update(state.gender, {3: {$set: state.gender[3]+1}})
					}))
					break;
					case 'gndrNb': 
					this.setState(state => ({
						gender: update(state.gender, {4: {$set: state.gender[4]+1}})
					}))
					break;
					case 'gndrOther': 
					this.setState(state => ({
						gender: update(state.gender, {5: {$set: state.gender[5]+1}})
					}))
					break;
					case 'gndrUndefined': 
					this.setState(state => ({
						gender: update(state.gender, {6: {$set: state.gender[6]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.ethnicity) {
				case 'raceCaucasian':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {0: {$set: state.ethnicity[0]+1}})
					}))
					break;
				case 'raceNegroid':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {1: {$set: state.ethnicity[1]+1}})
					}))
					break;
				case 'raceMongoloid':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {2: {$set: state.ethnicity[2]+1}})
					}))
					break;
				case 'raceAsian':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {3: {$set: state.ethnicity[3]+1}})
					}))
					break;
				case 'raceFilipino':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {4: {$set: state.ethnicity[4]+1}})
					}))
					break;
				case 'raceNative':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {5: {$set: state.ethnicity[5]+1}})
					}))
					break;
				case 'raceLatinx':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {6: {$set: state.ethnicity[6]+1}})
					}))
					break;
				case 'raceOther':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {7: {$set: state.ethnicity[7]+1}})
					}))
					break;
				case 'raceUnspecified':
					this.setState(state => ({
						ethnicity: update(state.ethnicity, {8: {$set: state.ethnicity[8]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.education) {
				case 'eduNone':
					this.setState(state => ({
						education: update(state.education, {0: {$set: state.education[0]+1}})
					}))
					break;
				case 'eduPrimary':
					this.setState(state => ({
						education: update(state.education, {1: {$set: state.education[1]+1}})
					}))
					break;
				case 'eduSecondary':
					this.setState(state => ({
						education: update(state.education, {2: {$set: state.education[2]+1}})
					}))
					break;
				case 'eduBachelors':
					this.setState(state => ({
						education: update(state.education, {3: {$set: state.education[3]+1}})
					}))
					break;
				case 'eduMasters':
					this.setState(state => ({
						education: update(state.education, {4: {$set: state.education[4]+1}})
					}))
					break;
				case 'eduDoctorate':
					this.setState(state => ({
						education: update(state.education, {5: {$set: state.education[5]+1}})
					}))
					break;
				case 'eduOther':
					this.setState(state => ({
						education: update(state.education, {6: {$set: state.education[6]+1}})
					}))
					break;
				case 'eduUnspecified':
					this.setState(state => ({
						education: update(state.education, {7: {$set: state.education[7]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.employment) {
				case 'emplFull':
					this.setState(state => ({
						employment: update(state.employment, {0: {$set: state.employment[0]+1}})
					}))
					break;
				case 'emplPart':
					this.setState(state => ({
						employment: update(state.employment, {1: {$set: state.employment[1]+1}})
					}))
					break;
				case 'emplUnLook':
					this.setState(state => ({
						employment: update(state.employment, {2: {$set: state.employment[2]+1}})
					}))
					break;
				case 'emplUn':
					this.setState(state => ({
						employment: update(state.employment, {3: {$set: state.employment[3]+1}})
					}))
					break;
				case 'emplStudent':
					this.setState(state => ({
						employment: update(state.employment, {4: {$set: state.employment[4]+1}})
					}))
					break;
				case 'emplRetired':
					this.setState(state => ({
						employment: update(state.employment, {5: {$set: state.employment[5]+1}})
					}))
					break;
				case 'emplSelf':
					this.setState(state => ({
						employment: update(state.employment, {6: {$set: state.employment[6]+1}})
					}))
					break;
				case 'emplUnable':
					this.setState(state => ({
						employment: update(state.employment, {7: {$set: state.employment[7]+1}})
					}))
					break;
				case 'emplOther':
					this.setState(state => ({
						employment: update(state.employment, {8: {$set: state.employment[8]+1}})
					}))
					break;
				case 'emplUnspecified':
					this.setState(state => ({
						employment: update(state.employment, {9: {$set: state.employment[9]+1}})
					}))
					break;
					default: console.log('error')
			}
			//survey2
			if(el.pudding === 'puddingChocolate') {
				this.setState(state => ({
					pudding: update(state.pudding, {0: {$set: state.pudding[0]+1}})
				}))
			} else if(el.pudding === 'puddingVanilla') {
				this.setState(state => ({
					pudding: update(state.pudding, {1: {$set: state.pudding[1]+1}})
				}))
			}
			
			if(el.chocolate === 'chocolateDark') {
				this.setState(state => ({
					chocolate: update(state.chocolate, {0: {$set: state.chocolate[0]+1}})
				}))
			} else if(el.chocolate === 'chocolateMilk') {
				this.setState(state => ({
					chocolate: update(state.chocolate, {1: {$set: state.chocolate[1]+1}})
				}))
			}
			
			if(el.staple === 'stapleRice') {
				this.setState(state => ({
					staple: update(state.pudding, {0: {$set: state.staple[0]+1}})
				}))
			} else if(el.staple === 'staplePotatoes') {
				this.setState(state => ({
					staple: update(state.staple, {1: {$set: state.staple[1]+1}})
				}))
			}
			
			if(el.hemisphere === 'hemisphereN') {
				this.setState(state => ({
					hemisphere: update(state.hemisphere, {0: {$set: state.hemisphere[0]+1}})
				}))
			} else if(el.hemisphere === 'hemisphereS') {
				this.setState(state => ({
					hemisphere: update(state.hemisphere, {1: {$set: state.hemisphere[1]+1}})
				}))
			}
			
			if(el.framework === 'frameworkReact') {
				this.setState(state => ({
					framework: update(state.framework, {0: {$set: state.framework[0]+1}})
				}))
			} else if(el.framework === 'frameworkAngular') {
				this.setState(state => ({
					framework: update(state.framework, {1: {$set: state.framework[1]+1}})
				}))
			}

			if(el.english === 'engilshAmerican') {
				this.setState(state => ({
					english: update(state.english, {0: {$set: state.english[0]+1}})
				}))
			} else if(el.english === 'englishBritish') {
				this.setState(state => ({
					english: update(state.english, {1: {$set: state.english[1]+1}})
				}))
			}
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
				case 'q11':
					this.setState(state => ({
						q1: update(state.q1, {0: {$set: state.q1[0]+1}})
					}))
					break;
				case 'q12':
					this.setState(state => ({
						q1: update(state.q1, {1: {$set: state.q1[1]+1}})
					}))
					break;
				case 'q13':
					this.setState(state => ({
						q1: update(state.q1, {2: {$set: state.q1[2]+1}})
					}))
					break;
				case 'q14':
					this.setState(state => ({
						q1: update(state.q1, {3: {$set: state.q1[3]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.q2) {
				case 'q21':
					this.setState(state => ({
						q2: update(state.q2, {0: {$set: state.q2[0]+1}})
					}))
					break;
				case 'q22':
					this.setState(state => ({
						q2: update(state.q2, {1: {$set: state.q2[1]+1}})
					}))
					break;
				case 'q23':
					this.setState(state => ({
						q2: update(state.q2, {2: {$set: state.q2[2]+1}})
					}))
					break;
				case 'q24':
					this.setState(state => ({
						q2: update(state.q2, {3: {$set: state.q2[3]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.q3) {
				case 'q31':
					this.setState(state => ({
						q3: update(state.q3, {0: {$set: state.q3[0]+1}})
					}))
					break;
				case 'q32':
					this.setState(state => ({
						q3: update(state.q3, {1: {$set: state.q3[1]+1}})
					}))
					break;
				case 'q33':
					this.setState(state => ({
						q3: update(state.q3, {2: {$set: state.q3[2]+1}})
					}))
					break;
				case 'q34':
					this.setState(state => ({
						q3: update(state.q3, {3: {$set: state.q3[3]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.q4) {
				case 'q41':
					this.setState(state => ({
						q4: update(state.q4, {0: {$set: state.q4[0]+1}})
					}))
					break;
				case 'q42':
					this.setState(state => ({
						q4: update(state.q4, {1: {$set: state.q4[1]+1}})
					}))
					break;
				case 'q43':
					this.setState(state => ({
						q4: update(state.q4, {2: {$set: state.q4[2]+1}})
					}))
					break;
				case 'q44':
					this.setState(state => ({
						q4: update(state.q4, {3: {$set: state.q4[3]+1}})
					}))
					break;
				default: console.log('error')
			}

			switch(el.q5) {
				case 'q51':
					this.setState(state => ({
						q5: update(state.q5, {0: {$set: state.q5[0]+1}})
					}))
					break;
				case 'q52':
					this.setState(state => ({
						q5: update(state.q5, {1: {$set: state.q5[1]+1}})
					}))
					break;
				case 'q53':
					this.setState(state => ({
						q5: update(state.q5, {2: {$set: state.q5[2]+1}})
					}))
					break;
				case 'q54':
					this.setState(state => ({
						q5: update(state.q5, {3: {$set: state.q5[3]+1}})
					}))
					break;
					default: console.log('error')
			}

			switch(el.q6) {
				case 'q61':
					this.setState(state => ({
						q6: update(state.q6, {0: {$set: state.q6[0]+1}})
					}))
					break;
				case 'q62':
					this.setState(state => ({
						q6: update(state.q6, {1: {$set: state.q6[1]+1}})
					}))
					break;
				case 'q63':
					this.setState(state => ({
						q6: update(state.q6, {2: {$set: state.q6[2]+1}})
					}))
					break;
				case 'q64':
					this.setState(state => ({
						q6: update(state.q6, {3: {$set: state.q6[3]+1}})
					}))
					break;
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
				<div>
					<p>A total of <strong>{this.state.results.length}</strong> people participated in this survey</p>
					<h3>Part 1 - demopgraphics</h3>
					<div>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["0-17", this.state.age[0]], ["18-24", this.state.age[1]], ["25-34", this.state.age[2]], ["35-50", this.state.age[3]], ["50-66", this.state.age[4]], ["67+", this.state.age[5]], ["Prefer not to answer", this.state.age[6]]]}
							options={pieOptions}
							graph_id="PieChart1"
							width={"200px"}
							height={"200px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["Cis Male", this.state.gender[0]], ["Cis Female", this.state.gender[1]], ["Trans male", this.state.gender[2]], ["Trans female", this.state.gender[3]], ["Genderqueer / Genderfluid / Non-binary", this.state.gender[4]], ["Other", this.state.gender[5]], ["Prefer not to answer", this.state.gender[6]]]}
							options={pieOptions}
							graph_id="PieChart2"
							width={"200px"}
							height={"200px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["Caucasian", this.state.gender[0]], ["Negroid", this.state.gender[1]], ["Mongoloid", this.state.gender[2]], ["Asian", this.state.gender[3]], ["Filipino", this.state.gender[4]], ["Native American", this.state.gender[5]], ["Latinx", this.state.gender[6]], ["Other", this.state.gender[7]], ["Prefer not to answer", this.state.gender[8]]]}
							options={pieOptions}
							graph_id="PieChart3"
							width={"200px"}
							height={"200px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["No education", this.state.education[0]], ["Primary Education", this.state.education[1]], ["Secondary Education", this.state.education[2]], ["Bachelor's degree", this.state.education[3]], ["Master's degree", this.state.education[4]], ["Doctorate", this.state.education[5]], ["Other", this.state.education[6]], ["Prefer not to answer", this.state.education[7]]]}
							options={pieOptions}
							graph_id="PieChart4"
							width={"200px"}
							height={"200px"}
							legend_toggle
						/>
						<Chart
							chartType="PieChart"
							data={[["", ""], ["Full-time(40+ hours a week)", this.state.employment[0]], ["Part-time(less than 40 hours a week)", this.state.employment[1]], ["Unemployed (looking for job)", this.state.employment[2]], ["Unemployed (not looking for a job)", this.state.employment[3]], ["Student", this.state.employment[4]], ["Retired", this.state.employment[5]], ["Self-employed", this.state.employment[6]], ["Unable to work", this.state.employment[7]], ["Other", this.state.employment[7]], ["Prefer not to answer", this.state.employment[7]]]}
							options={pieOptions}
							graph_id="PieChart5"
							width={"200px"}
							height={"200px"}
							legend_toggle
						/>
					</div>
					
					<Chart
						width={'800px'}
						height={'300px'}
						chartType="BarChart"
						loader={<div>Loading Chart</div>}
						data={[
							['', 'Option 1', 'Option 2'],
							['Chocolate Pudding \n Vanilla Pudding', this.state.pudding[0], this.state.pudding[1]],
							['Dark Chocolate \n Milk Chocolate', this.state.chocolate[0], this.state.chocolate[1]],
							['Rice \n Potatoes', this.state.staple[0], this.state.staple[1]],
							['Northen Hemisphere \n Southen Hemisphere', this.state.hemisphere[0], this.state.hemisphere[1]],
							['Reacr \n Angular', this.state.framework[0], this.state.framework[1]],
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
	
					<div>
						<div>
							<h2>Shortest answer:</h2>
							<p>{this.state.shortest}</p>
						</div>
						<div>
							<h2>Longest answer:</h2>
							<p>{this.state.longest}</p>
						</div>
					</div>
					
					<div>
						<ol>
							<li>
								What's Freddy floating around?<br />
								<br />
								Dopamine {Math.floor(this.state.q1[0]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>Ecstasy {Math.floor(this.state.q1[1]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								Excitement {Math.floor(this.state.q1[2]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%<br />
								Elecricity {Math.floor(this.state.q1[3]/this.state.q1.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li>
								He's a tiger doing what?<br />
								<br />
								<strong>defying the laws of gravity {Math.floor(this.state.q2[0]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								denying all of his cavities {Math.floor(this.state.q2[1]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%<br />
								drinking the juice of anitgravity {Math.floor(this.state.q2[2]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%<br />
								subdueing his creativity {Math.floor(this.state.q2[3]/this.state.q2.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li>
								He's a racing car passing by like who?<br />
								<br />
								Alexander the Great {Math.floor(this.state.q3[0]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>Lady Godiva {Math.floor(this.state.q3[1]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								Ayrton Senna {Math.floor(this.state.q3[2]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%<br />
								The Pope {Math.floor(this.state.q3[3]/this.state.q3.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li>
								He's a rocketship on his way where?<br />
								<br />
								<strong>to Mars {Math.floor(this.state.q4[0]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								to Pluto {Math.floor(this.state.q4[1]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%<br />
								to Uranus {Math.floor(this.state.q4[2]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%<br />
								to Venus {Math.floor(this.state.q4[3]/this.state.q4.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li>
								He's about to explode as what kind of a bomb?<br />
								<br />
								hydrogen bomb {Math.floor(this.state.q5[0]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%<br />
								nuclear bomb {Math.floor(this.state.q5[1]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%<br />
								<strong>atomic bomb {Math.floor(this.state.q5[2]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%</strong><br />
								neutron bomb {Math.floor(this.state.q5[3]/this.state.q5.reduce((acc, val) => acc + val) * 100)}%<br />
							</li>
							<br />
							<li>
								He's travelling at what speed?<br />
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