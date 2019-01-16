import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterRetailSale extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterRetailSale"
        onClickLocation="/menu/master/retail sale/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterRetailSale;
