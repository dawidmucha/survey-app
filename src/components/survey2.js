import React from 'react'
import {withRouter} from 'react-router-dom'
import styles from '../styles/survey.module.css'

class Survey2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	componentDidMount() {
		this.props.updatePath()
	}

	onSubmit(e) {
		e.preventDefault()

		for(let [key, value] of Object.entries(this.state)) {
			localStorage.setItem(key, value)
			console.log(key, value)
		}

		this.props.history.push('/survey3')
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		return (
			<div className={styles.container}>
				<h1>Would you rather</h1>
				<p>Ok, I know it depends, but if you HAD to choose</p>

				<form className={styles.form2} onSubmit={this.onSubmit}>
					<label htmlFor='puddingChocolate' className={`${styles.onLeft} ${styles.element}`}>
						<span className={styles.text}>Chocolate pudding</span>
						<input type='radio' name='pudding' id='puddingChocolate' value='puddingChocolate' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
					</label>
					<label htmlFor='puddingVanilla' className={styles.element}>
						<input type='radio' name='pudding' id='puddingVanilla' value='puddingVanilla' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
						<span className={styles.text}>Vainlla pudding</span>
					</label> <br />

					<label htmlFor='chocolateDark' className={`${styles.onLeft} ${styles.element}`}>
						<span className={styles.text}>Dark chocolate</span>
						<input type='radio' name='chocolate' id='chocolateDark' value='chocolateDark' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
					</label>
					<label htmlFor='chocolateMilk' className={styles.element}>
						<input type='radio' name='chocolate' id='chocolateMilk' value='chocolateMilk' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
						<span className={styles.text}>Milk chocolate</span>
					</label> <br />

					<label htmlFor='stapleRice' className={`${styles.onLeft} ${styles.element}`}>
						<span className={styles.text}>Rice</span>
						<input type='radio' name='staple' id='stapleRice' value='stapleRice' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
					</label>
					<label htmlFor='staplePotatoes' className={styles.element}>
						<input type='radio' name='staple' id='staplePotatoes' value='staplePotatoes' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
						<span className={styles.text}>Potatoes</span>
					</label> <br />

					<label htmlFor='hemisphereN' className={`${styles.onLeft} ${styles.element}`}>
						<span className={styles.text}>Northen Hemisphere</span>
						<input type='radio' name='hemisphere' id='hemisphereN' value='hemisphereN' onChange={this.onChange}  />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
					</label>
					<label htmlFor='hemisphereS' className={styles.element}>
						<input type='radio' name='hemisphere' id='hemisphereS' value='hemisphereS' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
						<span className={styles.text}>Southen Hemisphere</span>
					</label> <br />

					<label htmlFor='frameworkReact' className={`${styles.onLeft} ${styles.element}`}>
						<span className={styles.text}>React</span>
						<input type='radio' name='framework' id='frameworkReact' value='frameworkReact' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
					</label>
					<label htmlFor='frameworkAngular' className={styles.element}>
						<input type='radio' name='framework' id='frameworkAngular' value='frameworkAngular' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
						<span className={styles.text}>Angular</span>
					</label> <br />

					<label htmlFor='engilshAmerican' className={`${styles.onLeft} ${styles.element}`}>
						<span className={styles.text}>American english</span>
						<input type='radio' name='english' id='engilshAmerican' value='engilshAmerican' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
					</label>
					<label htmlFor='englishBritish' className={styles.element}>
						<input type='radio' name='english' id='englishBritish' value='englishBritish' onChange={this.onChange} />
						<span className={`${styles.customInput} ${styles.customInput2}`} />
						<span className={styles.text}>British english</span>
					</label> <br />

					<button type='submit' className={`${styles.button} ${styles.button2}`}>NEXT</button>
				</form>
			</div>
		)
	}
}

export default withRouter(Survey2)

// TODO rewrite this file so that <label> wraps <input> and <span> (so when custom input is clicked it's being activated)