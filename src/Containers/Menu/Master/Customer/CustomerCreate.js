import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterCustomerCreate extends Component {
  render() {
    return (
      <CreatePage
        navTable="masterCustomer"
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
            name: 'cut',
            control: 'input'
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
        onCreateLocation="/menu/master/customer"
      />
    );
  }
}

export default MasterCustomerCreate;
