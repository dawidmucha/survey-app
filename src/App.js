import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ExercisesList from "./components/main";
import Survey1 from "./components/survey1";
import Survey2 from "./components/survey2";
import Survey3 from "./components/survey3";
import Survey4 from "./components/survey4";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/survey1" exact component={Survey1} />
        <Route path="/survey2" exact component={Survey2} />
        <Route path="/survey3" exact component={Survey3} />
        <Route path="/survey4" exact component={Survey4} />
      </div>
      <div>
        a-yo a yo <br />
        i heard you ridin on the same tall, tall tale
      </div>
    </Router>
  );
}

export default App;