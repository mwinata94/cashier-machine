import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionServiceUpdateSearchItemResult extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionServiceUpdate"
        navTableParams={this.props.match.params.tid}
        // onClickAPI={api.addTransactionServiceOrder}
        onClickLocation={`/menu/transaction/service/${
          this.props.match.params.tid
        }/order`}
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionServiceUpdateSearchItemResult;
