import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterGroupSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO
    // api call to fetch group tables
    // based on params :id and/or :name
    // onClick edit
    this.setState({
      resultTable: {
        columns: ['id', 'name'],
        rows: [
          {
            columns: ['QWE', 'Qwerty'],
            onClick: _ =>
              (window.location = '/menu/master/group/edit/id/QWE/name/Qwerty')
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <NavigationBar table="masterGroup" />
        </div>
        <div className="hero-body">
          {this.state.resultTable ? (
            <DisplayTable table={this.state.resultTable} />
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

export default MasterGroupSearchResult;
