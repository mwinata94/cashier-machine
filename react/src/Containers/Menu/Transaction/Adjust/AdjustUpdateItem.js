import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransactionItem';

class TransactionAdjustUpdateItem extends Component {
  render() {
    return (
      <UpdatePage
        navTable="transactionAdjustUpdate"
        navTableParams={this.props.match.params.tid}
        onUpdateLocation={`/menu/transaction/adjust/${
          this.props.match.params.tid
        }`}
      />
    );
  }
}

export default TransactionAdjustUpdateItem;
