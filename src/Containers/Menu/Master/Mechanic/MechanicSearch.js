import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class MasterMechanicSearch extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      id: '',
      name: '',
      startingDate: '',
      endingDate: '',
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
              name: 'starting date',
              control: 'input'
            },
            {
              name: 'ending date',
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
                window.location = `/menu/master/mechanic/search${
                  '' === this.state.id ? '' : `/id/${this.state.id}`
                }${'' === this.state.name ? '' : `/name/${this.state.name}`}${
                  '' === this.state.startingDate
                    ? ''
                    : `/starting date/${this.state.startingDate}`
                }${
                  '' === this.state.endingDate
                    ? ''
                    : `/ending date/${this.state.endingDate}`
                }${
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
      <MyHero
        navTable="masterMechanic"
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

export default MasterMechanicSearch;
