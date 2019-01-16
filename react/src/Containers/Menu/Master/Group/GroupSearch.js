import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterGroupSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="masterGroup"
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

export default MasterGroupSearch;
