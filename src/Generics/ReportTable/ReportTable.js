import React, { Component } from 'react';

class ReportTable extends Component {
  constructor(props) {
    super(props);
    this.dropdownOnClick = this.dropdownOnClick.bind(this);
  }

  dropdownOnClick = _ => {
    document.querySelector('.dropdown').classList.toggle('is-active');
  };

  render() {
    if (this.props.table) {
      if (this.props.table.rows.length) {
        return (
          <div className="dropdown">
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={this.dropdownOnClick}
              >
                <span>Dropdown button</span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a className="dropdown-item">Dropdown item</a>
                <a className="dropdown-item">Other dropdown item</a>
                <a className="dropdown-item">Active dropdown item</a>
                <a className="dropdown-item">Other dropdown item</a>
                <a className="dropdown-item">With a divider</a>
              </div>
            </div>
          </div>
        );
      } else {
        return <div className="is-size-3">No Data Found</div>;
      }
    } else {
      return (
        <div className="container has-text-centered">
          <a className="button is-success is-loading is-large">Loading</a>
        </div>
      );
    }
  }
}

export default ReportTable;
