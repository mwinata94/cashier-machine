import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterSupplierCreate extends Component {
  render() {
    return (
      <CreatePage
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
        onCreateLocation="/menu/master/supplier"
      />
    );
  }
}

export default MasterSupplierCreate;
