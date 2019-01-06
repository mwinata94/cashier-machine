import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransaction';

class TransactionReturnPurchaseUpdate extends Component {
  render() {
    return (
      <UpdatePage
        tid={this.props.match.params.tid}
        navTable="transactionReturnPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        alignTop={true}
      />
    );
  }
}

export default TransactionReturnPurchaseUpdate;
