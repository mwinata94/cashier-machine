import React, { Component } from 'react';
import CreatePage from '../../../Generics/Page/Create';

class Create extends Component {
  render() {
    return (
      <CreatePage
        navTable="wishList"
        queries={[
          {
            name: 'id',
            control: 'input'
          },
          {
            name: 'qty',
            control: 'input',
            type: 'number'
          }
        ]}
        onCreateLocation="/menu/wishlist"
      />
    );
  }
}

export default Create;
