import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterRetailSaleUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterRetailSale"
        onUpdateLocation="/menu/master/retail sale"
      />
    );
  }
}

export default MasterRetailSaleUpdate;
