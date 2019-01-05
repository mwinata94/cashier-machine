import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterSupplierSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="masterSupplier"
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
            name: 'address',
            control: 'input'
          },
          {
            name: 'phone number',
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

export default MasterSupplierSearch;
