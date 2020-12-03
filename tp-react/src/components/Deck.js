import React, { Component } from 'react';
import Cards from './Cards';
import Target from './Target';
import '../App.css';

class Deck extends Component {

    onDeleteCard(card) {
        this.props.handleDeleteCard(card);
    }

    render(){
        return(
            <div className="Deck">
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-6">
                            <h1>Champions disponibles</h1>
                            <div class="row">
                                { this.props.cards.map(card => 
                                    <Cards 
                                        card = { card }
                                        onDeleteCard = { this.onDeleteCard.bind(this) }
                                        currentCard = { card }
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-6 bg-secondary rounded">
                            <h1 className="text-white">Mon deck</h1>
                            <Target />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deck;