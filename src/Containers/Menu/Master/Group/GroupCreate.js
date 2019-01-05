import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterGroupCreate extends Component {
  render() {
    return (
      <CreatePage
        navTable="masterGroup"
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
        onCreateLocation="/menu/master/group"
      />
    );
  }
}

export default MasterGroupCreate;
