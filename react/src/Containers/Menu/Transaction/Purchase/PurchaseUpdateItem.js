import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransactionItem';

class TransactionPurchaseUpdateItem extends Component {
  render() {
    return (
      <UpdatePage
        navTable="transactionPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        onUpdateLocation={`/menu/transaction/purchase/${
          this.props.match.params.tid
        }`}
      />
    );
  }
}

export default TransactionPurchaseUpdateItem;
