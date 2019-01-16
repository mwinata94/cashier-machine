import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionPurchase extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionPurchase"
        onClickLocation="/menu/transaction/purchase"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionPurchase;
