import React, { Component } from 'react';

class NavigationBarItem extends Component {
  render() {
    if (this.props.e.child) {
      return (
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link is-size-3" onClick={this.props.e.onClick} href="#no-where">
            {this.props.e.name}
          </a>
          <div className="navbar-dropdown">
            {this.props.e.child.map((e, i) => {
              if ('divider' === e.name) {
                return <hr key={i} className="navbar-divider" />;
              } else {
                return (
                  <a
                    key={i}
                    className="navbar-item is-size-3"
                    onClick={e.onClick}
                    href="#no-where"
                  >
                    {e.name}
                  </a>
                );
              }
            })}
          </div>
        </div>
      );
    } else {
      return (
        <a className="navbar-item is-size-3" onClick={this.props.e.onClick} href="#no-where">
          {this.props.e.name}
        </a>
      );
    }
  }
}

export default NavigationBarItem;
