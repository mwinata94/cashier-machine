import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterLocationCreate extends Component {
  render() {
    return (
      <CreatePage
        navTable="masterLocation"
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
        onCreateLocation="/menu/master/location"
      />
    );
  }
}

export default MasterLocationCreate;
