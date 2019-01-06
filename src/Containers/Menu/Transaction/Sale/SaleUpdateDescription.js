import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransactionDescription';

class TransactionSaleUpdateDescription extends Component {
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

export default TransactionSaleUpdateDescription;
