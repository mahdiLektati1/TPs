import React from 'react';
import { Form, Field } from 'react-final-form';
import { connection, deconnection } from './actions';
import { connect } from 'react-redux';
import LogOut from './LogOut';
import './App.css';

const clickConnection = (formObj, loggedIn) => {
    const url = 'https://los.ling.fr/login'
    const FetchPara = {
        method: 'POST',
        body: JSON.stringify(formObj)
    }

    fetch(url, FetchPara)
    .then(reponse => reponse.json())
    .then(result => {
        console.log(result);
        loggedIn(result.token)
        alert("Vous êtes connecté");
        const Log = document.querySelector('.LoginF');
        Log.innerHTML = '';
        document.querySelector('.Logout').style.display = "block";
    })
}
const Login = ({loggedIn, tokenState, logOut}) => (
            <div className="login container-fluid">
              <div className="Logout" style={{display: "none"}}><LogOut log={logOut} value={tokenState} />
              </div>
              <div className="LoginF container text-center mt-4">
                <h1 className="text-light">Connection</h1>
                <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-lg-4 col-offset-6 centered rounded p-4 form_connection">
                  <Form onSubmit={(formObj) => clickConnection(formObj, loggedIn)}>
                    {({ handleSubmit}) => (
                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="inputPseudo">Pseudo</label>
                              <Field name="Email">
                                {({input}) => (
                                  <input type="text" className="form-control" id="inputEmail"></input>
                                )}
                              </Field>
                          </div><hr />
                          <div className="form-group">
                              <label htmlFor="inputPassword">Mot de passe</label>
                              <Field name="Password">
                                {({input}) => (
                                  <input type="password" className="form-control" id="inputPassword" required></input>
                                )}
                              </Field>
                          </div><hr />
                          <button type="submit" className="btn btn-primary form_connect_btn">Connecter</button>
                      </form>
                    )}
                  </Form>
                </div>
                <div className="col-4"></div>
                </div>
                </div>
            </div>
);

const mapDispatchToProps = (dispatch) => ({
    loggedIn: (token) => {dispatch(connection(token))},
    logOut: () => {dispatch(deconnection())}
})

const mapStateToProps = (state) =>({
    stateToken : state.token
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);