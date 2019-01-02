import React, { Component } from 'react';
import NavigationBar from '../../Generics/NavigationBar/NavigationBar';

class Menu extends Component {
  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <NavigationBar table="menu" />
        </div>
      </div>
    );
  }
}

export default Menu;
