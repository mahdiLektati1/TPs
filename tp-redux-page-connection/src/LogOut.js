import React from 'react';
import './App.css';

export default class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.clickDeconnection = this.clickDeconnection.bind(this);
      }

    clickDeconnection() {
        
        fetch('https://los.ling.fr/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            console.log(result);
            alert("Vous êtes déconnecté");
        })
    }

      
    render(){
        return(
            <div className="but">
                <button onClick={this.clickDeconnection}>Se déconnecter</button>
            </div>
        );
    }
    
}