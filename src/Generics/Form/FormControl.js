import React, { Component } from 'react';

class FormControl extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onInputChange(event) {
    this.props.onChange(event);
  }

  onLabelChange() {
    this.props.onChange({
      target: {
        name: this.props.e.name,
        value: this.props.e.value
      }
    });
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
        />
      ),
      label: (this.onLabelChange(),
      <div className="label is-large"> {this.props.e.value}</div>),
      select: (
        <div class="select is-info is-large">
          <select onChange={this.onSelectChange}>
            {this.props.e.items.map((e, i) => (
              <option key={i} value={e}>
                e
              </option>
            ))}
          </select>
        </div>
      )
    };

    return type[this.props.e.control];
  }
}

export default FormControl;
