import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
      <div className="Header">
         <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">League of stones</span>
            <form className="form-inline">
                <Link to='/signin'>
                    <button className="btn btn-outline-success my-2 my-sm-0">Se connecter</button>
                </Link>
                <Link to='/signup'>
                    <button className="btn btn-outline-success my-2 my-sm-0 ml-2">S'inscrire</button>
                </Link>
                
            </form>
        </nav>
      </div>
    );
  }
}

export default Header;