import React, { Component } from 'react'

export default class Main extends Component {	

	constructor(props) {
		super(props)

		this.state = {}

		this.onBtnSurvey = this.onBtnSurvey.bind(this)
		this.onBtnResults = this.onBtnResults.bind(this)
	}

	onBtnSurvey() {
		this.props.history.push('/survey1')
	}

	onBtnResults() {
		this.props.history.push('/results')
	}

	render() {
    return (
      <div>
				<p>Welcome! This survey has no actual purpouse other than to showcase my amazing web development abilities. You're about to take a survey. The answers are gathered and the results are showcased in the 'results' section. You don't have to answer any of this question truthfully because, as I said, this survey has no actual purpouse. Heve fun!</p>

				<button onClick={this.onBtnSurvey}>TAKE SURVEY</button>
				<button onClick={this.onBtnResults}>SEE THE RESULTS</button>
			</div>
    )
  }
}
