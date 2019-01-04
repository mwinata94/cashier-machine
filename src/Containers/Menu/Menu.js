import React, { Component } from 'react';
import MyHero from '../../Generics/MyHero/MyHero';
import DisplayTable from '../../Generics/DisplayTable/DisplayTable';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO
    // api call to fetch printer tables
    this.setState({
      defaultTable: {
        columns: ['printer name', 'status'],
        rows: [
          {
            columns: ['Printer', 'not connected']
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="menu"
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        footer={'test'}
      />
    );
  }
}

export default Menu;
