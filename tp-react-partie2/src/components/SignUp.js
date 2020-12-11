import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    
    state = {
        isEmailValid: false
    }


  render() {
    if (this.state.isEmailValid) {
        return (
            <AccoutCreatedSuccefully />
        )
    }
    else {
        return (
            <div className="SignUp">
                <div className="container text-center mt-4">
                    <h1 className="text-light">Inscription</h1>
                    <div className="row mt-4">
                        <div className="col-4"></div>
                        <div className="col-lg-4 col-offset-6 centered rounded p-4 form_inscription">
                            <Form onSubmit={ formObj =>
                                    fetch('https://los.ling.fr/user', {
                                        method: 'PUT',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body:JSON.stringify({
                                            "name": formObj.Pseudo,
                                            "email": formObj.Email,
                                            "password": formObj.Password
                                        })
                                    })
                                    .then(res => res.json())
                                    .then((result) => {
                                        this.setState({
                                            isEmailValid: true
                                        })
                                        
                                    },
                                    (error)=>{
                                        this.setState({
                                            isEmailValid: false
                                        })
                                    })
                            }>
                            {({ handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <label for="inputPseudo">Pseudo</label>
                                        <Field name="Pseudo">
                                            {({input}) => (
                                            <input type="text" {...input} class="form-control" id="inputPseudo" required></input>
                                            )}
                                        </Field>
                                    </div><hr />
                                    <div class="form-group">
                                        <label for="inputEmail">Email</label>
                                        <Field name="Email">
                                            {({input}) => (
                                            <input type="Email" {...input} class="form-control" id="inputEmail" required></input>
                                            )}
                                        </Field>
                                    </div><hr />
                                    <div class="form-group">
                                        <label for="inputPassword">Mot de passe</label>
                                        <Field name="Password">
                                            {({input}) => (
                                            <input type="password" name="password" {...input} class="form-control" id="inputPassword" required></input>
                                            )}
                                        </Field>
                                    </div><hr />
                                    <div class="form-group">
                                        <label for="verifyInputPassword">Confirmer votre mot de passe</label>
                                        <input type="password" name="confirm_password" class="form-control" id="verifyInputPassword" required></input>
                                    </div><hr />
                                    <button type="submit" class="btn btn-primary form_inscription_btn"
                                        
                                    >Valider</button>
                                </form>
                            )}
                            </Form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>        
            </div>
        );
    }
  }
}

const AccoutCreatedSuccefully = () => (
    <div className="AccoutCreatedSuccefully">
        <div className="container text-center mt-4">
            <h1 className="text-light">Votre Compte a bien était crée!</h1>
        </div>
    </div>
)

export default SignUp;