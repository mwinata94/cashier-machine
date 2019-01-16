import React, { Component } from 'react';
import SearchPage from '../../../../Generics/Page/Search';

class MasterCustomerSearch extends Component {
  render() {
    return (
      <SearchPage
        navTable="masterCustomer"
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
            name: 'cut',
            control: 'input'
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

export default MasterCustomerSearch;
