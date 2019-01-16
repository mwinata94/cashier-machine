import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransaction';

class TransactionAdjustUpdate extends Component {
  render() {
    return (
      <UpdatePage
        tid={this.props.match.params.tid}
        navTable="transactionAdjustUpdate"
        navTableParams={this.props.match.params.tid}
        alignTop={true}
      />
    );
  }
}

export default TransactionAdjustUpdate;
