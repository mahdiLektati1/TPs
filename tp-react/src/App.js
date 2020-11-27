import React, { Component } from 'react';

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
                <div className="container-fluid">
                    <h1>Champions disponibles</h1>
                    <div class="row">

                        { this.state.cards.map(card => 
                            <div className = "col-4">
                                <div className = "card">
                                    <img src = { "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +  card.key + "_0.jpg" } alt= {card.key} className="w-100 rounded card-img-top"></img>
                                    <div className = "card-body text-center">
                                        <h5 class="card-title text-primary">{card.key}</h5>
                                        <hr></hr>
                                        <p className="card-text">Attaque : {card.info.attack}</p>
                                        <p className="card-text">Armure  : {card.info.defense}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default App;