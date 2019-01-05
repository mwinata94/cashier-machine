import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterInventorySearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="masterInventory"
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
            name: 'quantity',
            control: 'input'
          },
          {
            name: 'location',
            control: 'select',
            items: ['']
          },
          {
            name: 'type',
            control: 'select',
            items: ['']
          },
          {
            name: 'group',
            control: 'select',
            items: ['']
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

export default MasterInventorySearch;
