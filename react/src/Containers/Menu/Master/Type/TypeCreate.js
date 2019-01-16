import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterTypeCreate extends Component {
  render() {
    return (
      <CreatePage
        navTable="masterType"
        queries={[
          {
            name: 'id',
            control: 'input'
          },
          {
            name: 'name',
            control: 'input'
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
        onCreateLocation="/menu/master/type"
      />
    );
  }
}

export default MasterTypeCreate;
