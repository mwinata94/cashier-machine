import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class ReportPurchaseSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="reportPurchase"
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

export default ReportPurchaseSearch;
