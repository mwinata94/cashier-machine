import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransaction';

class TransactionSaleUpdate extends Component {
  render() {
    return (
      <UpdatePage
        tid={this.props.match.params.tid}
        navTable="transactionSaleUpdate"
        navTableParams={this.props.match.params.tid}
        alignTop={true}
      />
    );
  }
}

export default TransactionSaleUpdate;
