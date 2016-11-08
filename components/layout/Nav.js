import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { IndexLink, Link } from "react-router";
import { logOut } from '../../redux/actions/user';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const favouritesClass = location.pathname.match(/^\/favourites/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    // const signupClass = location.pathname.match(/^\/signup/) ? "active" : "";
    const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Todos</IndexLink>
              </li>
              <li class={favouritesClass}>
                <Link to="favourites" onClick={this.toggleCollapse.bind(this)}>Favourites</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav" style={{float: "right"}}>
              {/*<li class={signupClass}>
                <Link class="pull-right" to="signup" onClick={this.toggleCollapse.bind(this)}>Sign Up</Link>
              </li>*/}
              <li class={loginClass}>
                { this.props.user.authenticated ?
                  (<Link class="pull-right" onClick={()=> this.props.dispatch(logOut())} to="/">Logout</Link>) :
                  (<Link class="pull-right" to="login" onClick={this.toggleCollapse.bind(this)}>Login/Register</Link>)
                }
                {/*<Link class="pull-right" to="login" onClick={this.toggleCollapse.bind(this)}>Login/Register</Link>*/}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// Nav.propTypes = {
//   user: PropTypes.object,
//   dispatch: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Nav);
