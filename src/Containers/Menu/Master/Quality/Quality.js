import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterQuality extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO
    // api call to fetch quality tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: ['id', 'name'],
        rows: [
          {
            columns: ['QWE', 'Qwerty'],
            onClick: _ =>
              (window.location = '/menu/master/quality/edit/id/QWE/name/Qwerty')
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <NavigationBar table="masterQuality" />
        </div>
        <div className="hero-body">
          {this.state.defaultTable ? (
            <DisplayTable table={this.state.defaultTable} />
          ) : (
            <div className="container has-text-centered is-size-3">
              Loading...
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MasterQuality;
