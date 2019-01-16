import React, { Component } from 'react';

class DisplayTable extends Component {
  render() {
    if (this.props.table) {
      if (this.props.table.rows.length) {
        return (
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
                {this.props.table.rows.map((e, i) => (
                  <tr key={i} onClick={e.onClick} onMouseEnter={e.onMouseEnter}>
                    {e.columns.map((e, i) => (
                      <td key={i}>{e}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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

export default DisplayTable;
