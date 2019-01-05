import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterTypeSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="masterType"
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

export default MasterTypeSearch;
