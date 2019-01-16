import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionReturnPurchase extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionReturnPurchase"
        onClickLocation="/menu/transaction/return purchase"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionReturnPurchase;
