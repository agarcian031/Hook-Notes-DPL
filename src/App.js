import React, {Fragment} from 'react';
import { Router, Switch, Route, Link} from 'react-router-dom'
import State from './components/User'
import './App.css';

const App = () => (
    <Fragment>
      <Switch>
      <Route exact path='/state' component={State}/>
      </Switch>
    <div className="App">
      <header className="App-header">
        <Link style={{color: 'green'}} to="/state">
          Try useState
        </Link>
      </header>
    </div>
    </Fragment>
)

export default App;
