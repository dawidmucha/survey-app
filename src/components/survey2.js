import React from 'react'

class Survey2 extends React.Component {
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

		this.props.history.push('/survey3')
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		return (
			<div>
				<h1>Would you rather</h1>
				<p>Ok, I know it depends, but if you HAD to choose</p>

				<form onSubmit={this.onSubmit}>
						<label htmlFor='pudding'>Chocolate pudding</label>
						<input type='radio' name='pudding' id='puddingChocolate' value='puddingChocolate' onChange={this.onChange} />
						<input type='radio' name='pudding' id='puddingVanilla' value='puddingVanilla' onChange={this.onChange} />
						<label htmlFor='pudding'>Vainlla pudding</label> <br />

						<label htmlFor='chocolate'>Dark chocolate</label>
						<input type='radio' name='chocolate' id='chocolateDark' value='chocolateDark' onChange={this.onChange} />
						<input type='radio' name='chocolate' id='chocolateMilk' value='chocolateMilk' onChange={this.onChange} />
						<label htmlFor='chocolate'>Milk chocolate</label> <br />

						<label htmlFor='staple'>Rice</label>
						<input type='radio' name='staple' id='stapleRice' value='stapleRice' onChange={this.onChange} />
						<input type='radio' name='staple' id='staplePotatoes' value='staplePotatoes' onChange={this.onChange} />
						<label htmlFor='staple'>Potatoes</label> <br />

						<label htmlFor='hemisphere'>Northen Hemisphere</label>
						<input type='radio' name='hemisphere' id='hemisphereN' value='hemisphereN' onChange={this.onChange}  />
						<input type='radio' name='hemisphere' id='hemisphereS' value='hemisphereS' onChange={this.onChange} />
						<label htmlFor='hemisphere'>Southen Hemisphere</label> <br />

						<label htmlFor='framework'>React</label>
						<input type='radio' name='framework' id='frameworkReact' value='frameworkReact' onChange={this.onChange} />
						<input type='radio' name='framework' id='frameworkAngular' value='frameworkAngular' onChange={this.onChange} />
						<label htmlFor='framework'>Angular</label> <br />

						<label htmlFor='english'>American english</label>
						<input type='radio' name='english' id='engilshAmerican' value='engilshAmerican' onChange={this.onChange} />
						<input type='radio' name='english' id='anglishBritish' value='anglishBritish' onChange={this.onChange} />
						<label htmlFor='english'>British english</label> <br />
						
						<button type='submit'>NEXT</button>
					</form>
			</div>
		)
	}
}

export default Survey2