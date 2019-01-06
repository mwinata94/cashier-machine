import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionSale extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionSale"
        onClickLocation="/menu/transaction/sale"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionSale;
