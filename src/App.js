import React, {Fragment} from 'react';
import { Router, Switch, Route, Link} from 'react-router-dom'
import Effect from './components/Effect'
import State from './components/User'
import './App.css';

const App = () => (
    <Fragment>
      <Switch>
      <Route exact path='/state' component={State}/>
      <Route exact path='/effect' component={Effect}/>
      </Switch>
    <div className="App">
      <header className="App-header">
        <Link style={{color: 'green'}} to="/state">
          Try useState
        </Link>
        <div>-----</div>
        <Link style={{color: 'green'}} to="/effect">
          Try useEffect
        </Link>
      </header>
    </div>
    </Fragment>
)

export default App;
