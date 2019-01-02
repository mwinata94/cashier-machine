import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch group tables
    // onClick edit
    this.setState({
      defaultTable: {
        columns: ['id', 'name'],
        rows: [
          {
            columns: ['QWE', 'Qwerty'],
            onClick: _ =>
              (window.location =
                '/menu/master/group/edit/id/QWE/name/Qwerty/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <NavigationBar table="masterGroup" />
        <section className="hero is-fullheight">
          <div className="hero-head is-size-2">__</div>
          <div className="hero-body">
            {this.state.defaultTable ? (
              <DisplayTable table={this.state.defaultTable} />
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

export default MasterGroup;
