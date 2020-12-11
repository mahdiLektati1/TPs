import React from 'react';
import './App.css';
import Menu from './Menu';
import Login from './Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Route path="/Login" component={Login}/>
        </div>
      </Router>
      
    );
  }
  
}


export default App;
