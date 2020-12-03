import React, { Component } from 'react';
import { without } from'lodash';
import Header from './components/Header';
import Deck from './components/Deck';
import './App.css';

class App extends Component {

    state = {
        cards: [],
        Counter: 0
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
    
    deleteCard(card) {
        const cards = without(this.state.cards, card);
        this.setState({
            cards
        });
    }
    
    render() {
        return ( 
            <div className = "App">
                <Header />
                <Deck 
                    cards = { this.state.cards } 
                    handleDeleteCard = { this.deleteCard.bind(this) }
                />
            </div>
        );
    }
}

export default App;