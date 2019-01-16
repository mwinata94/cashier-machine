import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterCustomer extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterCustomer"
        onClickLocation="/menu/master/customer/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterCustomer;
