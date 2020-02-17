import React from 'react'
import {withRouter} from 'react-router-dom'
import styles from '../styles/survey.module.css'

class Survey3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

	componentDidMount() {
		this.props.updatePath()
  }
  
  onChange(e) {
    this.setState({value: e.target.value})
  }

  async onSubmit(e) {
		e.preventDefault()
		
		for(let [key, value] of Object.entries(this.state)) {
			localStorage.setItem(key, value)
		}

		this.props.history.push('/survey4')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <textarea value={this.state.value} onChange={this.onChange} cols={40} rows={10} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(Survey3)