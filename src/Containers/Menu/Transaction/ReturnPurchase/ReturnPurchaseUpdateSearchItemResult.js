import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionReturnPurchaseUpdateSearchItemResult extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionReturnPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        // onClickAPI={api.addTransactionReturnPurchaseOrder}
        onClickLocation={`/menu/transaction/return purchase/${
          this.props.match.params.tid
        }/order`}
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionReturnPurchaseUpdateSearchItemResult;
