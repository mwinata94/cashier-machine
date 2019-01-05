import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterInventoryCreate extends Component {
  render() {
    return (
      <CreatePage
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
            name: 'purchase price',
            control: 'input'
          },
          {
            name: 'sale price',
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
            items: []
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
        onCreateLocation="/menu/master/inventory"
      />
    );
  }
}

export default MasterInventoryCreate;
