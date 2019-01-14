import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class ReportServiceSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="reportService"
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
            name: 'mechanic',
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

export default ReportServiceSearch;
