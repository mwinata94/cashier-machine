import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterSupplierUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterSupplier"
        onUpdateLocation="/menu/master/supplier"
      />
    );
  }
}

export default MasterSupplierUpdate;
