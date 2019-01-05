import React, { Component } from 'react';
import CreatePage from '../../../../Generics/Page/Create';

class MasterMechanicCreate extends Component {
  render() {
    return (
      <CreatePage
        navTable="masterMechanic"
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
            name: 'starting date',
            control: 'input'
          },
          {
            name: 'ending date',
            control: 'input'
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
        onCreateLocation="/menu/master/mechanic"
      />
    );
  }
}

export default MasterMechanicCreate;
