import React, { Component } from 'react';
import NavigationBar from '../../Generics/NavigationBar/NavigationBar';

class Menu extends Component {
  render() {
    return (
      <div>
        <NavigationBar table="menu" />
        <section className="hero is-fullheight-with-navbar" />
      </div>
    );
  }
}

export default Menu;
