import React, { Component } from 'react';

class TableFormControl extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      value: this.props.e.value ? this.props.e.value : ''
    };
  }

  onInputChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange(event);
  }

  onSelectChange(option) {
    this.props.onChange({
      target: {
        name: this.props.e.name,
        value: option.value
      }
    });
  }

  render() {
    const type = {
      input: (
        <input
          className="input is-large"
          name={this.props.e.name}
          onChange={this.onInputChange}
          type={this.props.e.name}
          placeholder={this.props.e.name}
          value={this.state.value}
        />
      ),
      label: <div className="label is-large"> {this.state.value}</div>,
      select: (
        <div class="select is-info is-large is-fullwidth">
          <select>
            {this.props.e.items &&
              this.props.e.items.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
          </select>
        </div>
      )
    };
    return type[this.props.e.control];
  }
}

export default TableFormControl;
