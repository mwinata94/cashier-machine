import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterRetailSaleCreate extends Component {
  render() {
    return (
      <CreatePage
        navTable="masterRetailSale"
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
            name: 'starting date',
            control: 'input'
          },
          {
            name: 'ending date',
            control: 'input'
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
        onCreateLocation="/menu/master/retail sale"
      />
    );
  }
}

export default MasterRetailSaleCreate;
