import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterSupplierSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch supplier tables
    // based on params :id and/or :name
    // onClick edit
    this.setState({
      resultTable: {
        columns: ['id', 'name', 'address', 'phone number'],
        rows: [
          {
            columns: ['QWE', 'Qwerty', '101 Qwe 1st', '111-111-1111'],
            onClick: _ =>
              (window.location =
                '/menu/master/supplier/edit/id/QWE/name/Qwerty/address/101 Qwe 1st/phone number/111-111-1111/description/QWE Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <NavigationBar table="masterSupplier" />
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

export default MasterSupplierSearchResult;
