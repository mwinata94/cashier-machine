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
                <tr
                  name={i}
                  key={i}
                  onClick={this.dropdownOnClick}
                  onMouseEnter={e.onMouseEnter}
                >
                  {e.columns.map((e, j) => (
                    <td key={j} name={i}>
                      {e}
                    </td>
                  ))}
                  <div
                    className="dropdown"
                    name={i}
                    style={{
                      left: '0%',
                      paddingTop: '2em',
                      position: 'absolute',
                      width: '100vw'
                    }}
                  >
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                      style={{
                        width: '95vw',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        position: 'relative'
                      }}
                    >
                      <div className="dropdown-content">
                        {
                          <div className="dropdown-item">
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
                        }
                      </div>
                    </div>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
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
