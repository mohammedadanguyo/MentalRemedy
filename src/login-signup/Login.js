import React, { Component } from 'react';
import { GoSignIn } from 'react-icons/go';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';
import FirebaseError from './FirebaseError';

class Login extends Component {
  constructor(props) {
    super(props);
    this.goToSignup = this.goToSignup.bind(this);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goToSignup(event) {
    event.preventDefault();
    this.props.history.push('/signup');
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
                              <h1 className="sub-heading">Login</h1>
                              <FirebaseError errorMessage={value.errorMessage} />
                              <input type="email" name="email" className="small-text" id="email" placeholder="Email" ref={this.emailRef} />
                              <input type="password" name="password" className="small-text" id="password" placeholder="Password" ref={this.passwordRef} />
                              <button className="small-heading large-btn"
                            onClick={(event) => value.logIn(this.emailRef.current.value, this.passwordRef.current.value, event)}><GoSignIn /> Login</button>
                              <button className="plain-btn" onClick={this.goToSignup}><small className="xxsmall-text">You don`t have an account? Signup</small></button>
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

export default withRouter(Login);
