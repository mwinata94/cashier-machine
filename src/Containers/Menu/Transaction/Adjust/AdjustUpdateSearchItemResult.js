import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionAdjustUpdateSearchItemResult extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionAdjustUpdate"
        navTableParams={this.props.match.params.tid}
        // onClickAPI={api.addTransactionAdjustOrder}
        onClickLocation={`/menu/transaction/adjust/${
          this.props.match.params.tid
        }/order`}
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionAdjustUpdateSearchItemResult;
