import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionService extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionService"
        onClickLocation="/menu/transaction/service"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionService;
