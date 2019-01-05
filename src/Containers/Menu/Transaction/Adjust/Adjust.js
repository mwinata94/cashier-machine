import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class TransactionAdjust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch adjust tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: ['id', 'date'],
        rows: [
          {
            columns: ['IAD190130001', '20190130'],
            onClick: _ =>
              (window.location = '/menu/transaction/adjust/IAD190130001'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="transactionAdjust"
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        alignTop={true}
        footer={this.state.footer}
      />
    );
  }
}

export default TransactionAdjust;
