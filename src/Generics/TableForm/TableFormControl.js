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

  componentDidMount() {
    if ('select' === this.props.e.control) {
      // api
      //   .fetchSelect(this.props.e.name)
      //   .then(data => this.setState({ items: data }));
    }
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
          className="input"
          name={this.props.e.name}
          onChange={this.onInputChange}
          type={this.props.e.name}
          placeholder={this.props.e.name}
          value={this.state.value}
        />
      ),
      label: <div className="label"> {this.state.value}</div>,
      select: (
        <div className="select is-info is-fullwidth">
          <select>
            {this.state.items &&
              this.state.items.map((e, i) =>
                this.state.value === e ? (
                  <option key={i} value={e} selected>
                    {e}
                  </option>
                ) : (
                  <option key={i} value={e}>
                    {e}
                  </option>
                )
              )}
          </select>
        </div>
      ),
      empty: <div />
    };
    return type[this.props.e.control];
  }
}

export default TableFormControl;
