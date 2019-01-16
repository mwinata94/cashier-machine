import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLogin(event) {
    let apiCheck = true;
    if (apiCheck) {
      window.location = '/menu';
    }
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="tile is-ancestor">
            <div className="tile" />
            <div className="tile is-parent is-vertical">
              <div className="tile">
                <div className="tile is-child">
                  <input
                    className="input is-large"
                    name="username"
                    onChange={this.onChange}
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="tile is-child">
                  <input
                    className="input is-large"
                    name="password"
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div
                className="tile is-child button is-info is-large"
                onClick={this.onLogin}
              >
                Login
              </div>
            </div>
            <div className="tile" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
