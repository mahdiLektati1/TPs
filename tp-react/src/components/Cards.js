import React, { Component } from 'react';

class Cards extends Component {

    onDeleteCard() {
        this.props.onDeleteCard(this.props.currentCard);
    }

    render(){
        return(
            <div className = "col-4">
                <div className = "card" onClick = { this.onDeleteCard.bind(this) }>
                    <img src = { "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +  this.props.card.key + "_0.jpg" } alt= {this.props.card.key} className="w-100 rounded card-img-top img__hover_zoom"></img>
                    <div className = "card-body text-center">
                        <h5 class="card-title text-primary">{this.props.card.key}</h5>
                        <hr></hr>
                        <p className="card-text">Attaque : {this.props.card.info.attack}</p>
                        <p className="card-text">Armure  : {this.props.card.info.defense}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cards;