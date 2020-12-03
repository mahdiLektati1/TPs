import React, { Component } from 'react';
import Cards from './Cards';

class Target extends Component {

    render(){
        return (
            <div class ="row">
                {
                    this.props.choices.map(card =>
                        <Cards 
                            card = { card }
                        />
                )} 
            </div>
        )
    }
}

export default Target;