import React, { Component } from 'react';
import NavigationBarItem from './NavigationBarItem';
import * as list from './list';
import Time from 'react-time';

import 'bulma/css/bulma.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.burgerOnClick = this.burgerOnClick.bind(this);
    this.state = {
      time: new Date(),
      table: list[this.props.table]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  burgerOnClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    document.querySelector('.navbar-burger').classList.toggle('is-active');
  };

  render() {
    return (
      <nav
        className="navbar is-size-3 is-info is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src="https://seeklogo.com/images/Y/Yamaha-logo-A3BB6DB4EB-seeklogo.com.png"
              width="36"
              height="36"
              alt="yamaha logo"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarTopMenu"
            onClick={this.burgerOnClick}
          >
            {this.state.table.map((e, i) => (
              <span key={i} />
            ))}
            <span />
          </div>
        </div>
        <div id="navbarTopMenu" className="navbar-menu">
          <div className="navbar-start">
            {this.state.table
              .filter(e => 'left' === e.align)
              .map((e, i) => (
                <NavigationBarItem key={i} e={e} />
              ))}
          </div>
          <div className="navbar-end">
            <a className="navbar-item is-size-6">
              Today is&nbsp;
              <Time value={this.state.time} format="HH:mm:ss DD/MM/YYYY" />
            </a>
            {this.state.table
              .filter(e => 'right' === e.align)
              .map((e, i) => (
                <NavigationBarItem key={i} e={e} />
              ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
