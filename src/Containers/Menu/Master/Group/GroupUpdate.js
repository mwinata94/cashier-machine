import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterGroupUpdate extends Component {
  render() {
    return (
      <UpdatePage
        navTable="masterGroup"
        onUpdateLocation="/menu/master/group"
      />
    );
  }
}

export default MasterGroupUpdate;
