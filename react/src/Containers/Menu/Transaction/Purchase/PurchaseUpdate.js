import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransaction';

class TransactionPurchaseUpdate extends Component {
  render() {
    return (
      <UpdatePage
        tid={this.props.match.params.tid}
        navTable="transactionPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        alignTop={true}
      />
    );
  }
}

export default TransactionPurchaseUpdate;
