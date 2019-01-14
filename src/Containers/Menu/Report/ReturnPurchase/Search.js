import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class ReportReturnPurchaseSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="reportReturnPurchase"
        queries={[
          {
            name: 'starting date',
            control: 'date'
          },
          {
            name: 'ending date',
            control: 'date'
          },
          {
            name: 'supplier',
            control: 'select'
          },
          {
            name: 'item',
            control: 'input'
          },
          {
            name: 'selection',
            control: 'select',
            items: ['exact', 'include'],
            value: 'exact'
          }
        ]}
      />
    );
  }
}

export default ReportReturnPurchaseSearch;
