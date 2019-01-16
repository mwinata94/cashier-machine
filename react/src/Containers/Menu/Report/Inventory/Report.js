import React, { Component } from 'react';
import ReportPage from '../../../../Generics/Page/Report';

class TransactionInventory extends Component {
  render() {
    return <ReportPage navTable="reportInventory" alignTop={true} />;
  }
}

export default TransactionInventory;
