import React from 'react';
import './App.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Header />
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
        </div>
      </Router>
    );
  }
}

export default App;
