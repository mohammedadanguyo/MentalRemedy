import React, { Component } from 'react';
import { GiJoin } from 'react-icons/gi';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';
import FirebaseError from './FirebaseError';
import PasswordError from './PasswordError';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.goToLogin = this.goToLogin.bind(this);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.rPasswordRef = React.createRef();
    this.usernameRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goToLogin(event) {
    event.preventDefault();
    this.props.history.push('/login');
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <main>
                            <form>
                                <div className="center-box-wrapper">
                                    <div className="center-box">
                                        <h1 className="sub-heading">Sign up</h1>
                                        <FirebaseError errorMessage={value.errorMessage} />
                                        <PasswordError passwordError={value.passwordError} />
                                        <input type="username" name="username" className="small-text" id="username" placeholder="Username" ref={this.usernameRef} />
                                        <input type="email" name="email" className="small-text" id="email" placeholder="Email" ref={this.emailRef} />
                                        <input type="password" name="password" className="small-text" id="password" placeholder="Password" ref={this.passwordRef} />
                                        <input type="password" name="password" className="small-text" id="r-password" placeholder="Repeat Password" ref={this.rPasswordRef} />
                                        <button className="small-heading large-btn"
                                      onClick={(event) => {
                                        event.preventDefault();
                                        if (this.rPasswordRef.current.value !== this.passwordRef.current.value) {
                                          value.dispatch({ type: 'PASSWORDERROR', payload: 'Passwords do not match' });
                                        }
                                        if (this.rPasswordRef.current.value === this.passwordRef.current.value) {
                                          value.signUp(this.usernameRef.current.value, this.emailRef.current.value, this.passwordRef.current.value);
                                          value.dispatch({ type: 'PASSWORDERROR', payload: '' });
                                        }
                                      }}><GiJoin/> SignUp</button>
                                        <button className="plain-btn" onClick={this.goToLogin}><small className="xxsmall-text black-text">Already joined? Login</small></button>
                                    </div>
                                </div>
                            </form>
                        </main>
                  );
                }}
            </Consumer>
    );
  }
}

export default withRouter(SignUp);
