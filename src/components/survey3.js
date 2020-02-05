import React from 'react'

class Survey3 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	async onSubmit(e) {
		e.preventDefault()

		await localStorage.setItem('surv3', JSON.stringify(this.state))
		console.log(localStorage)

		this.props.history.push('/survey4')
	}

	async onChange(e) {
		await this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state)
	}

	componentDidUpdate() {
		console.log(this.state)
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
						<label htmlFor='pudding'><h1>What would you do if you won $1000?</h1></label>
						<p>Write a word or a thesis, I don't care</p>
						<textarea id='price' name='price' value={this.state.value} onChange={this.handleChange} />

						<button type='submit'>NEXT</button>
					</form>
			</div>
		)
	}
}

export default Survey3