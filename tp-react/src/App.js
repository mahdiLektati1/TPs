import React, { Component } from 'react';
import { without } from'lodash';
import Header from './components/Header';
import Deck from './components/Deck';
import './App.css';

class App extends Component {

    state = {
        cards: [],
        choices: [],
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
    
    selectCard(card) {
        const cards = without(this.state.cards, card);
        const newArray = this.state.choices.slice();
        newArray.push(card);
        this.setState({
            cards: cards,
            choices: newArray
        });
        
    }

    countCardsSelected() {
        return this.state.choices.length;
    }
    
    render() {
        return ( 
            <div className = "App">
                <Header />
                <Deck 
                    cards = { this.state.cards } 
                    handleSelectCard = { this.selectCard.bind(this) }
                    choices = { this.state.choices }
                    handlecountCardsSelected = { this.countCardsSelected.bind(this) }
                />
            </div>
        );
    }
}

export default App;