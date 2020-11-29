import React, { Component } from 'react';
import Deck from './components/Deck';
import './App.css';

class App extends Component {

    state = {
        cards: []
    }

    componentDidMount() {
        fetch('https://los.ling.fr/cards')
            .then( (response) => {
                return response.json();    
            })
            .then( (result) => {
                this.setState({cards: result});
            })
    }
    

    render() {
        return ( 
            <div className = "App">
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">League of stones</span>
                </nav>
                <Deck cards = {this.state.cards} />
            </div>
        );
    }
}

export default App;