import React from 'react';
import { Form, Field } from 'react-final-form';

class SignIn extends React.Component {
  render() {
    return(
      <div className="SignIn">
        <div className="container text-center mt-4">
            <h1 className="text-light">Connection</h1>
            <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-lg-4 col-offset-6 centered rounded p-4 form_connection">
                  <Form onSubmit={formObj => {
                        console.log(formObj);
                    }}>
                    {({ handleSubmit}) => (
                      <form onSubmit={handleSubmit}>
                          <div class="form-group">
                              <label for="inputEmail">Pseudo</label>
                              <Field name="Email">
                                {({input}) => (
                                  <input type="email" class="form-control" id="inputEmail" required></input>
                                )}
                              </Field>
                          </div><hr />
                          <div class="form-group">
                              <label for="inputPassword">Mot de passe</label>
                              <Field name="Password">
                                {({input}) => (
                                  <input type="password" class="form-control" id="inputPassword" required></input>
                                )}
                              </Field>
                          </div><hr />
                          <button type="submit" class="btn btn-primary form_connect_btn">Connecter</button>
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

export default SignIn;