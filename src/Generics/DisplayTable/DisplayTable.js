import React, { Component } from 'react';

class DisplayTable extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        {this.props.table.columns.map((e, i) => (
          <div key={i} className="tile is parent is-vertical">
            <div key={-1} className="tile is-child">
              {e}
            </div>
            {this.props.table.rows.map((e, j) => (
              <div key={j} className="tile is-child" onClick={e[i].onClick}>
                {e[i].name}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayTable;
