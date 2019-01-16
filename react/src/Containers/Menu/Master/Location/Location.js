import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterLocation extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterLocation"
        onClickLocation="/menu/master/location/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterLocation;
