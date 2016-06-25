import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({

  onLoginGithub() {
    var {dispatch} = this.props;
    dispatch(actions.startLoginGithub());
  },

  onLoginFacebook() {
    var {dispatch} = this.props;
    dispatch(actions.startLoginFacebook());
  },

  onLoginTwitter() {
    var {dispatch} = this.props;
    dispatch(actions.startLoginTwitter());
  },





  render() {
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>

        <div className='row'>
          <div className='columns small-centered small-10 medium-6 large-4'>
            <div className='callout callout-auth'>
              <h3>Login</h3>
              <p>
                Login with github account below.
              </p>

              <button className='button' onClick={ this.onLoginGithub } >Login With Github</button>
              <button className='button' onClick={this.onLoginFacebook} >Login With Facebook</button>
              <button className='button' onClick={this.onLoginTwitter} >Login With Twitter</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(Login);
