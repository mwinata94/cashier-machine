import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import Form from '../../../../Generics/Form/Form';

class MasterQualitySearch extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      id: '',
      name: '',
      description: ''
    };
  }

  componentDidMount() {
    if (!this.state.searchForm) {
      this.setState({
        searchForm: {
          queries: [
            {
              name: 'id',
              control: 'input'
            },
            {
              name: 'name',
              control: 'input'
            },
            {
              name: 'description',
              control: 'input'
            }
          ],
          buttons: [
            {
              name: 'search',
              onClick: _ => {
                /* TODO
                    api search 
                */
                window.location = `/menu/master/quality/search${
                  '' === this.state.id ? '' : `/id/${this.state.id}`
                }${'' === this.state.name ? '' : `/name/${this.state.name}`}${
                  '' === this.state.description
                    ? ''
                    : `/description/${this.state.description}`
                }`;
              }
            }
          ]
        }
      });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <NavigationBar table="masterQuality" />
        <section className="hero is-fullheight">
          <div className="hero-head is-size-2">__</div>
          <div className="hero-body">
            {this.state.searchForm ? (
              <Form
                formAttributes={this.state.searchForm}
                onChange={this.onChange}
              />
            ) : (
              <div className="container has-text-centered">
                <a className="button is-success is-loading is-large">Loading</a>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default MasterQualitySearch;
