import React, { Component } from 'react';

class FinalDeck extends Component {
    render(){
        return(
            <div className='FinalDeck'>
                <h1>Le Deck a été validé!</h1>
                <div className='row'>
                    {this.props.choices.map(card => 
                        <div className = "col-3" >
                            <div className = "card">
                                <img src = {"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + card.key + "_0.jpg"} alt = { card.key } className = "w-100 rounded card-img-top img__hover_zoom" ></img>
                                <div className = "card-body text-center" >
                                    <h5 class = "card-title text-primary" > { card.key } </h5> 
                                    <hr></hr> 
                                    <p className = "card-text" > Attaque: {card.info.attack} </p> 
                                    <p className = "card-text" > Armure: {card.info.defense} </p> 
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default FinalDeck;