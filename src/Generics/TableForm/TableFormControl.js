import React, { Component } from 'react';

class TableFormControl extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      value:
        'undefined' !== typeof this.props.e.value ? this.props.e.value : '',
      items: 'undefined' !== typeof this.props.e.items ? this.props.e.items : []
    };
  }

  componentDidMount() {
    if (
      'select' === this.props.e.control &&
      'undefined' === typeof this.props.e.items
    ) {
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

  render() {
    const type = {
      input: (
        <input
          className="input"
          name={this.props.e.name}
          onChange={this.onInputChange}
          type={
            'undefined' !== typeof this.props.e.type
              ? this.props.e.type
              : 'text'
          }
          placeholder={this.props.e.name}
          value={this.state.value}
        />
      ),
      label: <div className="label"> {this.state.value}</div>,
      select: (
        <div
          className="select is-info is-fullwidth"
          onChange={this.onInputChange}
        >
          <select name={this.props.e.name}>
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
