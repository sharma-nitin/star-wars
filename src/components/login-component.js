import React from 'react';
import {loginAction} from '../store/action-creators/login-actions';
import PropTypes from 'prop-types';
import '../css/style.css';

export default class Login extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        errormsg:''
    }
  }

  login = (e) => {
    let username = this.usernameField.value,
        password = this.passwordField.value,
        props = this.props,
        { store } = this.context;
        if(username === '' || password === ''){
          this.setState({errormsg:'username or password cannot be empty'});
          e.preventDefault();
        } else{
          this.setState({errormsg:''});
          store.dispatch(loginAction(props, username, password));
          e.preventDefault();
        }
  }

  render() {
    let { store } = this.context;
    var storeData;
    store.subscribe(() => {
      storeData = store.getState();
      let loginPageerror = storeData.loginReducer.errMsg;
      this.setState({errormsg:loginPageerror});
    });

    return (
      <div className="col-md-12 col-sm-12 no-padding">
        <div className="header-container">
          <p className="header">Welcome to world of Star Wars </p>

          <div className="login-box">
          <form onSubmit={this.login}>
            <label htmlFor="username-login">
              Username
            </label>
            <input
              type="text"
              id="username-login"
              ref={ (input) => { this.usernameField = input } }
            />
            <label htmlFor="password-login">
              Password
            </label>
            <input
              type="password"
              id="password-login"
              ref={ (input) => { this.passwordField = input } }
            />
            <p className="error">
              { this.state.errormsg }
            </p>
            <button>Login </button>
            <div className="clearfix" />
          </form>
        </div>
        </div>
      
      </div>
    );
  }
}

Login.contextTypes = { store: PropTypes.object };