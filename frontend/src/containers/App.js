import React from 'react';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  Button
} from 'reactstrap';

import NavBar from "../components/layout/NavBar";

import routes from "../routes";

import { connect } from 'react-redux';
import Login from '@gctools-components/gc-login';
import { loginAction, logoutAction, clearErrorAction } from '../store';

import oidcConfig from '../oidcConfig.dev';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../utils/oadw-dash.scss";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: false, user: false };
  }

  render() {
    
    const {
      onLogin,
      onLogout,
    } = this.props;

    const doLogin = (user) => {
      this.setState({ name: user.profile.name, user: user });
      onLogin(user);
    };

    const doLogout = () => {
      this.setState({ name: false });
      onLogout();
    };

    return (
      <Router >
        <div className="flex-grow-1" style={{height:"100%"}}>
          <NavBar>
              {
                (this.state.name) ?
                "Hello " + this.state.name + "  ":
                ""
              }
              <Login
                oidcConfig={oidcConfig}
                onUserLoaded={doLogin}
                onUserFetched={doLogin}
                onLogoutClick={(e, oidc) => {
                  oidc.logout();
                  doLogout();
                }}
              >
                {({ onClick }) => {
                  return (
                  <Button
                    color="info"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClick(e);
                    }}
                  >
                    {(this.state.name ? "Logout" : "Login")}
                  </Button>
                )}}
              </Login>
            
          </NavBar>
          {
            routes.map((route, index) => {
              return(
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={props => {
                    return (
                      <route.layout {...props}>
                        {
                          (this.state.user) ?
                            <route.component {...props} user={this.state.user} />
                            :
                            <route.component {...props} />
                        }
                        
                      </route.layout>
                    );
                  }}
                />
              );
            })
          }
        </div>
      </Router>
    );
  }
}

App.defaultProps = {
  onLogin: () => {},
  onLogout: () => {},
};

App.propTypes = {
  /** Login event callback  */
  onLogin: PropTypes.func,
  /** Logout event callback */
  onLogout: PropTypes.func,
};

const mapStToProps = ({ showError }) => {
  return({ showError: showError || [] })
};



const mapDispToProps = dispatch => ({
  onLogin: profile => {
    console.log(profile);
    return(dispatch(loginAction(profile)))
  },
  onLogout: () => dispatch(logoutAction()),
  onErrorClose: () => dispatch(clearErrorAction()),
});

export default connect(mapStToProps, mapDispToProps)(App);;