import React, { Component } from 'react';
import MyHero from '../../Generics/MyHero/MyHero';

class Menu extends Component {
  render() {
    return <MyHero navTable="menu" heroBody={<div />} />;
  }
}

export default Menu;
