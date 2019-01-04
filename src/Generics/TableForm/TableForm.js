import React, { Component } from 'react';
import TableFormControl from './TableFormControl';

class TableForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
    if (this.props.tableFormAttributes) {
      this.props.tableFormAttributes.queries.map(e =>
        e.filter(e => 'value' in e).map(e => (this.state[e.name] = e.value))
      );
    }
  }

  onChange(event) {
    this.props.onChange(event);
  }

  render() {
    if (this.props.tableFormAttributes) {
      return (
        <div className="tile is-ancestor is-vertical">
          {this.props.tableFormAttributes.queries.map((e, i) => (
            <div className="tile is-parent">
              {e.map((e, j) => (
                <div key={`${i}${j}`} className="tile is-parent">
                  <div className="tile is-child label is-size-3">{e.name}</div>
                  <div className="tile is-child">
                    <TableFormControl e={e} onChange={this.onChange} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="container has-text-centered">
          <a className="button is-success is-loading is-large">Loading</a>
        </div>
      );
    }
  }
}

export default TableForm;
