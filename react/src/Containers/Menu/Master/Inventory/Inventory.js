import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterInventory extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterInventory"
        onClickLocation="/menu/master/inventory/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterInventory;
