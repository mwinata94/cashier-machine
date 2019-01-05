import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import Form from '../Form/Form';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    let object = {};
    this.props.queries.map(e => (object[e.name] = ''));
    this.state = object;
  }

  componentDidMount() {
    if (!this.state.searchForm) {
      this.setState({
        searchForm: {
          queries: this.props.queries,
          buttons: [
            {
              name: 'search',
              onClick: this.onSearch
            }
          ]
        }
      });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSearch(_) {
    let windowLocation = window.location.pathname;
    this.props.queries.map(
      e =>
        (windowLocation +=
          '' === this.state[e.name] ? '' : `/${e.name}/${this.state[e.name]}`)
    );
    window.location = windowLocation;
  }

  render() {
    return (
      <MyHero
        navTable={this.props.navTable}
        navTableParams={this.props.navTableParams}
        heroBody={
          <Form
            formAttributes={this.state.searchForm}
            onChange={this.onChange}
          />
        }
      />
    );
  }
}

export default Search;
