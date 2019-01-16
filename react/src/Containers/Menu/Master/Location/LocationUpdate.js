import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterLocationUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterLocation"
        onUpdateLocation="/menu/master/location"
      />
    );
  }
}

export default MasterLocationUpdate;
