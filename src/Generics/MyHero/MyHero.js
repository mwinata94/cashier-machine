import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

class MyHero extends Component {
  render() {
    return (
      <div>
        <NavigationBar table={this.props.navTable} />
        <section className="hero is-fullheight">
          <div className="hero-head is-size-2">__</div>
          {this.props.alignTop ? (
            this.props.heroBody
          ) : (
            <div className="hero-body">{this.props.heroBody}</div>
          )}
          {this.props.footer && <div className="hero-foot is-size-3">__</div>}
        </section>
        {this.props.footer && (
          <nav
            className="navbar is-size-4 is-primary is-fixed-bottom"
            aria-label="main navigation"
          >
            <div
              className="navbar-brand"
              style={{ flexGrow: 1, justifyContent: 'center' }}
            >
              <a className="navbar-item">{this.props.footer}</a>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

export default MyHero;
