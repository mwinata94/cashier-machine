import React, { Component } from 'react';
import UpdatePage from '../../../../Generics/Page/UpdateMaster';

class MasterTypeUpdate extends Component {
  render() {
    return (
      <UpdatePage navTable="masterType" onUpdateLocation="/menu/master/type" />
    );
  }
}

export default MasterTypeUpdate;
