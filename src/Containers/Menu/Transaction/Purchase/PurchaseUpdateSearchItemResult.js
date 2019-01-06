import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionPurchaseUpdateSearchItemResult extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        // onClickAPI={api.addTransactionPurchaseOrder}
        onClickLocation={`/menu/transaction/purchase/${
          this.props.match.params.tid
        }/order`}
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionPurchaseUpdateSearchItemResult;
