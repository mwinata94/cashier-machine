import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterSupplier extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterSupplier"
        onClickLocation="/menu/master/supplier/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterSupplier;
