import React from 'react';
import { Form, Field } from 'react-final-form';

class SignUp extends React.Component {
  render() {
    return(
      <div className="SignUp">
        <div className="container text-center mt-4">
            <h1 className="text-light">Inscription</h1>
            <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-lg-4 col-offset-6 centered rounded p-4 form_inscription">
                    <Form onSubmit={formObj => {
                        console.log(formObj);
                    }}>
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
                                    <input type="password" {...input} class="form-control" id="inputPassword" required></input>
                                    )}
                                </Field>
                            </div><hr />
                            <div class="form-group">
                                <label for="verifyInputPassword">Confirmer votre mot de passe</label>
                                <input type="password" class="form-control" id="verifyInputPassword" required></input>
                            </div><hr />
                            <button type="submit" class="btn btn-primary form_inscription_btn">Valider</button>
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

export default SignUp;