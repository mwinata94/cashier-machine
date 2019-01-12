import React, { Component } from 'react';

class FormControl extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      value: 'undefined' !== typeof this.props.e.value ? this.props.e.value : ''
    };
  }

  componentDidMount() {
    if ('select' === this.props.e.control) {
      // api
      //   .fetchSelect(this.props.e.name)
      //   .then(data => this.setState({ items: data }));
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: 'undefined' !== typeof nextProps.e.value ? nextProps.e.value : ''
    });
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
      date: (
        <input
          className="tile"
          style={{ fontSize: '1em' }}
          name={this.props.e.name}
          onChange={this.onInputChange}
          type="date"
          min={this.props.e.min}
          max={this.props.e.max}
          value={this.state.value}
        />
      ),
      input: (
        <input
          className="input is-large"
          name={this.props.e.name}
          onChange={this.onInputChange}
          placeholder={this.props.e.name}
          value={this.state.value}
          type={
            'undefined' !== typeof this.props.e.type
              ? this.props.e.type
              : 'text'
          }
        />
      ),
      label: <div className="label is-large"> {this.state.value}</div>,
      select: (
        <div className="select is-info is-large is-fullwidth">
          <select>
            {this.state.items &&
              this.state.items.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
          </select>
        </div>
      ),
      textarea: (
        <textarea
          className="textarea"
          placeholder={this.props.e.name}
          rows={this.props.e.rows}
          cols={this.props.e.cols}
          onChange={this.onInputChange}
          value={this.state.value}
        />
      )
    };
    return type[this.props.e.control];
  }
}

export default FormControl;
