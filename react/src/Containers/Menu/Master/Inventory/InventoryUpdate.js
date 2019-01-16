import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterInventoryUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterInventory"
        onUpdateLocation="/menu/master/inventory"
      />
    );
  }
}

export default MasterInventoryUpdate;
