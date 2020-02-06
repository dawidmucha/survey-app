import React, { Component } from 'react'
import axios from 'axios'

export default class Results extends Component {
	constructor(props) {
		super(props)

		this.state = {
			results: ['livin la vida loca']
		}
	}
	
	componentDidMount() {
		axios.get('localhost:5000/results').then(response => {
			this.setState({results: response.data})
		}).catch((err => console.log(err)))
	}

	render() {
    return (
      <div>
				{this.state.results}
			</div>
    )
  }
}