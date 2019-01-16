import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterMechanicSearch extends Component {
  render() {
    return (
      <SearchPage
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
            control: 'date'
          },
          {
            name: 'ending date',
            control: 'date'
          },
          {
            name: 'description',
            control: 'input'
          }
        ]}
      />
    );
  }
}

export default MasterMechanicSearch;
