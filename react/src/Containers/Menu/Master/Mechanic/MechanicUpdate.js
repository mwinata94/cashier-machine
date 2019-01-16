import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterMechanicUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterMechanic"
        onUpdateLocation="/menu/master/mechanic"
      />
    );
  }
}

export default MasterMechanicUpdate;
