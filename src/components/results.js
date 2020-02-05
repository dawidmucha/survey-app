import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
	constructor(props) {
		super(props)
	}
	
	componentDidMount() {
		axios.get('localhost:5000').then(() => {
			console.log('red')
	})
}

render() {
    return (
      <div>
				*****, you're a kool-aid dude
			</div>
    )
  }
}