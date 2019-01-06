import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransactionDescription';

class TransactionReturnPurchaseUpdateDescription extends Component {
  render() {
    return (
      <UpdatePage
        navTable="transactionReturnPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        onUpdateLocation={`/menu/transaction/return purchase/${
          this.props.match.params.tid
        }`}
      />
    );
  }
}

export default TransactionReturnPurchaseUpdateDescription;
