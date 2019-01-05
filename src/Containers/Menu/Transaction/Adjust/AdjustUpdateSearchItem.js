import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class TransactionAdjustUpdateSearchItem extends Component {
  render() {
    return (
      <SearchPage
        navTable="transactionAdjustUpdate"
        navTableParams={this.props.match.params.tid}
        queries={[
          {
            name: 'id',
            control: 'input'
          },
          {
            name: 'name',
            control: 'input'
          },
          {
            name: 'quantity',
            control: 'input'
          },
          {
            name: 'location',
            control: 'select'
          },
          {
            name: 'type',
            control: 'select'
          },
          {
            name: 'group',
            control: 'select'
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
      />
    );
  }
}

export default TransactionAdjustUpdateSearchItem;
