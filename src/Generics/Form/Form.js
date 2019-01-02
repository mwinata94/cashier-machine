import React, { Component } from 'react';
import FormControl from './FormControl';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
    if (this.props.formAttributes) {
      this.props.formAttributes.queries
        .filter(e => 'value' in e)
        .map(e => (this.state[e.name] = e.value));
    }
  }

  onChange(event) {
    this.props.onChange(event);
  }

  render() {
    if (this.props.formAttributes) {
      return (
        <div className="tile is-ancestor">
          <div className="tile" />
          <div className="tile is-vertical">
            {this.props.formAttributes.queries.map((e, i) => (
              <div key={i} className="tile is-parent">
                <div className="tile is-child label is-size-3">{e.name}</div>
                <div className="tile is-child">
                  <FormControl e={e} onChange={this.onChange} />
                </div>
              </div>
            ))}
            <div className="tile is-parent">
              {this.props.formAttributes.buttons.map((e, i) => (
                <div
                  key={i}
                  className="tile is-child button is-info is-large"
                  onClick={e.onClick}
                >
                  {e.name}
                </div>
              ))}
            </div>
          </div>
          <div className="tile" />
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

export default Form;
