import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionAdjust extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionAdjust"
        onClickLocation="/menu/transaction/adjust"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionAdjust;
