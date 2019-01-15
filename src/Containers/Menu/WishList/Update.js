import React, { Component } from 'react';
import UpdatePage from '../../../Generics/Page/UpdateMaster';

class Update extends Component {
  render() {
    return <UpdatePage navTable="wishList" onUpdateLocation="/menu/wishList" />;
  }
}

export default Update;
