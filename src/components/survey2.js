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
					<label htmlFor='puddingChocolate' className={styles.onLeft}>Chocolate pudding</label>
					<input type='radio' name='pudding' id='puddingChocolate' value='puddingChocolate' onChange={this.onChange} className={styles.element} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<input type='radio' name='pudding' id='puddingVanilla' value='puddingVanilla' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<label htmlFor='puddingVanilla'>Vainlla pudding</label> <br />

					<label htmlFor='chocolateDark' className={styles.onLeft}>Dark chocolate</label>
					<input type='radio' name='chocolate' id='chocolateDark' value='chocolateDark' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<input type='radio' name='chocolate' id='chocolateMilk' value='chocolateMilk' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<label htmlFor='chocolateMilk'>Milk chocolate</label> <br />

					<label htmlFor='stapleRice' className={styles.onLeft}>Rice</label>
					<input type='radio' name='staple' id='stapleRice' value='stapleRice' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<input type='radio' name='staple' id='staplePotatoes' value='staplePotatoes' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<label htmlFor='staplePotatoes'>Potatoes</label> <br />

					<label htmlFor='hemisphereN' className={styles.onLeft}>Northen Hemisphere</label>
					<input type='radio' name='hemisphere' id='hemisphereN' value='hemisphereN' onChange={this.onChange}  />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<input type='radio' name='hemisphere' id='hemisphereS' value='hemisphereS' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<label htmlFor='hemisphereS'>Southen Hemisphere</label> <br />

					<label htmlFor='frameworkReact' className={styles.onLeft}>React</label>
					<input type='radio' name='framework' id='frameworkReact' value='frameworkReact' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<input type='radio' name='framework' id='frameworkAngular' value='frameworkAngular' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<label htmlFor='frameworkAngular'>Angular</label> <br />

					<label htmlFor='engilshAmerican' className={styles.onLeft}>American english</label>
					<input type='radio' name='english' id='engilshAmerican' value='engilshAmerican' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<input type='radio' name='english' id='englishBritish' value='englishBritish' onChange={this.onChange} />
					<span className={`${styles.customInput} ${styles.customInput2}`} />
					<label htmlFor='englishBritish'>British english</label> <br />
				</form>
				<button type='submit'>NEXT</button>
			</div>
		)
	}
}

export default withRouter(Survey2)

// TODO rewrite this file so that <label> wraps <input> and <span> (so when custom input is clicked it's being activated)