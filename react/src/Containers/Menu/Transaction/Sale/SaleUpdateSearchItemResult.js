import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class TransactionSaleUpdateSearchItemResult extends Component {
  render() {
    return (
      <IndexPage
        navTable="transactionSaleUpdate"
        navTableParams={this.props.match.params.tid}
        // onClickAPI={api.addTransactionSaleOrder}
        onClickLocation={`/menu/transaction/sale/${
          this.props.match.params.tid
        }/order`}
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default TransactionSaleUpdateSearchItemResult;
