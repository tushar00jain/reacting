import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode, loginSuccess } from '../redux/actions/user';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMode = this.toggleMode.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
  }

  toggleMode() {
    // this.props.dispatch(toggleLoginMode());
    this.props.actions.toggleLoginMode();
  }

  googleLogin() {
    // this.props.dispatch(loginSuccess());
  }

  onLoginSubmit(e) {
    e.preventDefault();
    // const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    // dispatch(manualLogin({
    //   email: email,
    //   password: password
    // }));
     this.props.actions.manualLogin({
      email: email,
      password: password
    });
  }

  onRegisterSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    this.props.actions.signUp({
      email: email,
      password: password
    });
  }

  renderHeader() {
  const { isLogin } = this.props.user;
  if (isLogin) {
    return (
      <div>
        <h4 class="text-center">Login with Email</h4>
        <div class="text-center">
          Not what you want?
          <a onClick={this.toggleMode}> Register an Account</a>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h4 class="text-center">Register with Email</h4>
      <div class="text-center">
        Already have an account?
        <a onClick={this.toggleMode}> Login</a>
      </div>
    </div>
  );
}

renderButton() {
  const { isLogin } = this.props.user;
  if (isLogin) {
    return (
      <button class="btn btn-warning form-control" onClick={this.onLoginSubmit}>Login</button>
    );
  }
  return (
    <button class="btn btn-warning form-control" onClick={this.onRegisterSubmit}>Register</button>
  );
}

  // navigate() {
  //   this.props.history.push('/')
  // }

  render() {
    const { isWaiting, message } = this.props.user;
    return (
      <div class="container">
      <br/>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-md-offset-4">
            <form role="form" class="form-signing">
                {/*<h4 class="text-center">Login with Email</h4>*/}
                { this.renderHeader() }
                <input class="form-control" ref="email" type="email" placeholder="Username" />
                <input class="form-control" ref="password" type="password" placeholder="Password" />
                { this.renderButton() }
                {/*<button class="btn btn-warning form-control" onClick={this.onLoginSubmit}>Login</button>*/}
            </form>
            <br/>
            {/*<button onClick={this.navigate.bind(this)}>push</button>;*/}
            <a href='/auth/google' onClick={this.googleLogin}><button class="form-control btn btn-primary"> Login with Google</button></a>
          </div>
        </div>
      </div>
    );
  }
}

// Login.propTypes = {
//   user: PropTypes.object,
//   dispatch: PropTypes.func
// };


function mapStateToProps(state) {
  // return state;
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ manualLogin, signUp, toggleLoginMode, loginSuccess, }, dispatch)
	}
}

// export default connect(mapStateToProps)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login)
