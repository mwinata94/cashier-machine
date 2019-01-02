import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterLocationSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch location tables
    // based on params :id and/or :name
    // onClick edit
    this.setState({
      resultTable: {
        columns: ['id', 'name'],
        rows: [
          {
            columns: ['QWE', 'Qwerty'],
            onClick: _ =>
              (window.location =
                '/menu/master/location/edit/id/QWE/name/Qwerty/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <NavigationBar table="masterLocation" />
        <section className="hero is-fullheight">
          <div className="hero-head is-size-2">__</div>
          <div className="hero-body">
            {this.state.resultTable ? (
              <DisplayTable table={this.state.resultTable} />
            ) : (
              <div className="container has-text-centered">
                <a className="button is-success is-loading is-large">Loading</a>
              </div>
            )}
          </div>
          <div className="hero-foot is-size-3">__</div>
        </section>
        <nav
          className="navbar is-size-4 is-primary is-fixed-bottom"
          aria-label="main navigation"
        >
          <div
            className="navbar-brand"
            style={{ flexGrow: 1, justifyContent: 'center' }}
          >
            <a className="navbar-item">{this.state.footer}</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default MasterLocationSearchResult;
