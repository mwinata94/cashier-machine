import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterQuality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch quality tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: ['id', 'name'],
        rows: [
          {
            columns: ['QWE', 'Qwerty'],
            onClick: _ =>
              (window.location =
                '/menu/master/quality/edit/id/QWE/name/Qwerty/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="masterQuality"
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        footer={this.state.footer}
      />
    );
  }
}

export default MasterQuality;
