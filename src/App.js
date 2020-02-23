import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from './styles/App.module.css'

import Main from "./components/main";
import Survey1 from "./components/survey1";
import Survey2 from "./components/survey2";
import Survey3 from "./components/survey3";
import Survey4 from "./components/survey4";
import Results from "./components/results";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: ''
    }
  }

  updatePath = (path) => this.setState({path})

  render() {
    return (
      <Router className={styles.router}>
        <div className={styles.routerBody}>
          <Route path="/" exact><Main updatePath={() => this.updatePath('main')} /></Route>
          <Route path="/survey1" exact><Survey1 updatePath={() => this.updatePath('survey1')} /></Route>
          <Route path="/survey2" exact><Survey2 updatePath={() => this.updatePath('survey2')} /></Route>
          <Route path="/survey3" exact><Survey3 updatePath={() => this.updatePath('survey3')} /></Route>
          <Route path="/survey4" exact><Survey4 updatePath={() => this.updatePath('survey4')} /></Route>
          <Route path="/results" exact><Results updatePath={() => this.updatePath('results')} /></Route>
        </div>
        <div className={`${styles[this.state.path]} ${styles.footer}`}></div>
      </Router>
    )
  }
}

export default App;