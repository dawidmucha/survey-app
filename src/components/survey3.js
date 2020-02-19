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
      <div className={`${styles.container} ${styles.container3}`}>
      <h1>What would you do with $1000?</h1>
      <p>Write a word or an essay, it's up to you.</p>
        <form onSubmit={this.onSubmit} className={`${styles.form} ${styles.form3}`}>
          <textarea className={styles.textArea} value={this.state.value} onChange={this.onChange} cols={40} rows={10} />
          <input className={`${styles.button} ${styles.input}`} type="submit" value="NEXT" />
        </form>
      </div>
    );
  }
}

export default withRouter(Survey3)