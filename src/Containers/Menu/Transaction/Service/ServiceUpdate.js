import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateTransaction';

class TransactionServiceUpdate extends Component {
  render() {
    return (
      <UpdatePage
        tid={this.props.match.params.tid}
        navTable="transactionServiceUpdate"
        navTableParams={this.props.match.params.tid}
        alignTop={true}
      />
    );
  }
}

export default TransactionServiceUpdate;
