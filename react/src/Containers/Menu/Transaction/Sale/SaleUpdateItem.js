import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransactionItem';

class TransactionSaleUpdateItem extends Component {
  render() {
    return (
      <UpdatePage
        navTable="transactionSaleUpdate"
        navTableParams={this.props.match.params.tid}
        onUpdateLocation={`/menu/transaction/sale/${
          this.props.match.params.tid
        }`}
      />
    );
  }
}

export default TransactionSaleUpdateItem;
