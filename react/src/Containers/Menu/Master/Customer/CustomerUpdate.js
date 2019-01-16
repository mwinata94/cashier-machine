import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterCustomerUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterCustomer"
        onUpdateLocation="/menu/master/customer"
      />
    );
  }
}

export default MasterCustomerUpdate;
