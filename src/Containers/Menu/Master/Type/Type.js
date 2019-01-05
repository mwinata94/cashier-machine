import React, { Component } from 'react';
import IndexPage from '../../../../Generics/Page/Index';

class MasterType extends Component {
  render() {
    return (
      <IndexPage
        navTable="masterType"
        onClickLocation="/menu/master/type/update"
        onClickLocationAppendId={true}
        alignTop={true}
      />
    );
  }
}

export default MasterType;
