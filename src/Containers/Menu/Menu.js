import React, { Component } from 'react';
import NavigationBar from '../../Generics/NavigationBar/NavigationBar';

class Menu extends Component {
  render() {
    return (
      <div>
        <NavigationBar table="menu" />
        <section className="hero is-fullheight">
          <div className="hero-head is-size-2">__</div>
        </section>
      </div>
    );
  }
}

export default Menu;
