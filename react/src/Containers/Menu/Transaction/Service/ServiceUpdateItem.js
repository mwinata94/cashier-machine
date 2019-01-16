import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransactionItem';

class TransactionServiceUpdateItem extends Component {
  render() {
    return (
      <UpdatePage
        navTable="transactionServiceUpdate"
        navTableParams={this.props.match.params.tid}
        onUpdateLocation={`/menu/transaction/service/${
          this.props.match.params.tid
        }`}
      />
    );
  }
}

export default TransactionServiceUpdateItem;
