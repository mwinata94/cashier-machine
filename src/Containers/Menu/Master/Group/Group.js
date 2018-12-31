import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';

class MasterGroup extends Component {
  render() {
    return (
      <NavigationBar
        table={[
          {
            name: 'create',
            align: 'left',
            onClick: event => {},
            child: []
          },
          {
            name: 'edit',
            align: 'left',
            onClick: event => {},
            child: []
          },
          {
            name: 'delete',
            align: 'left',
            onClick: event => {},
            child: []
          },
          {
            name: 'back',
            align: 'right',
            onClick: event => {
              window.location = '../../menu';
            },
            child: []
          }
        ]}
      />
    );
  }
}

export default MasterGroup;
