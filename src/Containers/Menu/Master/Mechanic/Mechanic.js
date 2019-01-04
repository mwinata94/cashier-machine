import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterMechanic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch mechanic tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: ['id', 'name', 'starting date', 'ending date'],
        rows: [
          {
            columns: ['QWE', 'Qwerty', '31-12-2010', '12-01-2011'],
            onClick: _ =>
              (window.location =
                '/menu/master/mechanic/edit/id/QWE/name/Qwerty/starting date/31-12-2010/ending date/12-01-2011/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="masterMechanic"
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        alignTop={true}
        footer={this.state.footer}
      />
    );
  }
}

export default MasterMechanic;
