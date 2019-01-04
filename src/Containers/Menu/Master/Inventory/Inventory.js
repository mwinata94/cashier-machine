import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch inventory tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: [
          'id',
          'name',
          <abbr title="quantity">qty</abbr>,
          'sale price',
          'location',
          'type',
          'group'
        ],
        rows: [
          {
            columns: [
              '1S7-F1311-200',
              'Qwerty',
              '0',
              '30,000',
              'F4',
              'QWE',
              'E4'
            ],
            onClick: _ =>
              (window.location =
                '/menu/master/inventory/edit/id/1S7-F1311-200/name/Qwerty/quantity/0/sale price/30,000/location/F4/type/QWE/group/E4/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="masterInventory"
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        alignTop={true}
        footer={this.state.footer}
      />
    );
  }
}

export default MasterInventory;
