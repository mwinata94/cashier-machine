import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class ReportAdjustSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="reportAdjust"
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

export default ReportAdjustSearch;
