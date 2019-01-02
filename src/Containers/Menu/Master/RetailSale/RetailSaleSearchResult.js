import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterRetailSaleSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch retail sale tables
    // based on params :id and/or :name
    // onClick edit
    this.setState({
      resultTable: {
        columns: ['id', 'name', 'starting date', 'ending date'],
        rows: [
          {
            columns: ['QWE', 'Qwerty', '101 Qwe 1st', '111-111-1111'],
            onClick: _ =>
              (window.location =
                '/menu/master/retail sale/edit/id/QWE/name/Qwerty/starting date/101 Qwe 1st/ending date/111-111-1111/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="masterRetailSale"
        heroBody={<DisplayTable table={this.state.resultTable} />}
        footer={this.state.footer}
      />
    );
  }
}

export default MasterRetailSaleSearchResult;
