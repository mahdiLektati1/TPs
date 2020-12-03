import React, { Component } from 'react';
import Cards from './Cards';
import Target from './Target';
import '../App.css';

class Deck extends Component {

    onSelectCard(card) {
        this.props.handleSelectCard(card);
    }

    counter() {
        return this.props.handlecountCardsSelected();
    }

    validateDeck() {
        return this.counter() >= 20 ? true : false;
    }

    showValidate() {
        return this.validateDeck() ? <button type="button" className="btn btn-primary mt-2">J'ai fini!</button> : "";
    }

    render(){
        return(
            <div className="Deck">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-6">
                            <h1>Champions disponibles</h1>
                            <div className = "row" >
                                { this.props.cards.map(card => 
                                    <Cards 
                                        card = { card }
                                        onSelectCard = { this.onSelectCard.bind(this) }
                                        currentCard = { card }
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-6 bg-secondary rounded">
                            <div className="row text-center">
                                <div className = "col-4 text-center">
                                    <h1 className="text-white">Mon deck</h1>
                                </div>
                                <div className = "col-4 text-center">
                                    <h1>  {this.counter()}  </h1>
                                </div>
                                <div className = "col-4 text-center">
                                    { this.showValidate() }
                                </div>
                                <div className = "pl-2 pr-1">
                                    <Target 
                                        choices = { this.props.choices }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deck;