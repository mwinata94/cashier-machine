import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class ReportInventorySearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="reportInventory"
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
            name: 'item',
            control: 'input'
          }
        ]}
      />
    );
  }
}

export default ReportInventorySearch;
