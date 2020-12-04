import React, { Component } from 'react';
import Cards from './Cards';

class Target extends Component {

    onSelectCard(card) {
        this.props.onSelectCard(card);
    }

    render() {
        return ( 
            <div class = "row" > 
                {this.props.choices.map(card =>
                    <Cards 
                        card = {card}
                        onSelectCard = {this.onSelectCard.bind(this)}
                        currentCard = {card}
                    />
                )
            } 
            </div>
        )
    }
}

export default Target;