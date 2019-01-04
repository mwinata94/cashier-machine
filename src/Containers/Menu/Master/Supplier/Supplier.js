import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch supplier tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: ['id', 'name', 'address', 'phone number'],
        rows: [
          {
            columns: ['QWE', 'Qwerty', '101 Qwe 1st', '111-111-1111'],
            onClick: _ =>
              (window.location =
                '/menu/master/supplier/edit/id/QWE/name/Qwerty/address/101 Qwe 1st/phone number/111-111-1111/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="masterSupplier"
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        alignTop={true}
        footer={this.state.footer}
      />
    );
  }
}

export default MasterSupplier;
