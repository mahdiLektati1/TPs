import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">League of stones</span>
                    <form className="form-inline">
                        <Link to='/Login'>
                        <button className="btn btn-outline-success my-2 my-sm-0">Se connecter</button>
                        </Link>
                    </form>
                </nav>
            </div>
        );
    }
}

export default Menu;