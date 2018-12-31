import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationBarTable: [
        {
          name: 'search',
          align: 'left',
          onClick: _ =>
            (this.state.displaySearchForm = !this.state.displaySearchForm),
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
      ],
      drawDisplayTable: false,
      displayTable: {},
      displaySearchForm: false,
      searchForm: {}
    };
  }

  componentDidMount() {
    // api call to fetch group tables
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <NavigationBar table={this.state.navigationBarTable} />
        </div>
        <div className="hero-body">
          {this.state.drawDisplayTable && (
            <DisplayTable table={this.state.displayTable} />
          )}
        </div>
      </div>
    );
  }
}

export default MasterGroup;
