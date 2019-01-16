import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterLocationSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="masterLocation"
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
            name: 'description',
            control: 'input'
          }
        ]}
      />
    );
  }
}

export default MasterLocationSearch;
