import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterGroup extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterGroup"
        onClickLocation="/menu/master/group/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterGroup;
