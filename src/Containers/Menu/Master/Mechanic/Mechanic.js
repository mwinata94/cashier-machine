import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterMechanic extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterMechanic"
        onClickLocation="/menu/master/mechanic/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterMechanic;
