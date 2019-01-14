import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class ReportSaleSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="reportSale"
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
            name: 'customer',
            control: 'select'
          },
          {
            name: 'retail sale',
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

export default ReportSaleSearch;
