import React, { Component } from 'react';

class ReportTable extends Component {
  constructor(props) {
    super(props);
    this.dropdownOnClick = this.dropdownOnClick.bind(this);
  }

  dropdownOnClick = event => {
    document
      .getElementsByClassName('dropdown')
      [event.target.getAttribute('name')].classList.toggle('is-active');
  };

  render() {
    if (this.props.table) {
      if (this.props.table.rows.length) {
        return (
          <div
            className="table-container"
            style={{ flex: '1 1 0', width: '100%' }}
          >
            {this.props.table.rows.map((e, i) => (
              <div key={i} style={{ flex: '1 1 0', width: '100%' }}>
                <div
                  className="table-container"
                  style={{ flex: '1 1 0', width: '100%' }}
                >
                  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        {this.props.table.columns.map((e, i) => (
                          <th key={i} className="has-text-centered">
                            {e}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr onMouseEnter={e.onMouseEnter}>
                        {e.columns.map((e, j) => (
                          <td key={j}>{e}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="table-container"
                  style={{ flex: '1 1 0', width: '100%' }}
                >
                  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        {e.data.columns.map((e, i) => (
                          <th key={i} className="has-text-centered">
                            {e}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {e.data.rows.map((e, i) => (
                        <tr
                          key={i}
                          onClick={e.onClick}
                          onMouseEnter={e.onMouseEnter}
                        >
                          {e.columns.map((e, i) => (
                            <td key={i}>{e}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
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
