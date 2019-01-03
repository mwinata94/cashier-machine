import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class MasterInventorySearch extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      id: '',
      name: '',
      quantity: '',
      location: '',
      type: '',
      group: '',
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
              name: 'quantity',
              control: 'input'
            },
            {
              name: 'location',
              control: 'select',
              items: []
            },
            {
              name: 'type',
              control: 'select',
              items: []
            },
            {
              name: 'group',
              control: 'select',
              items: []
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
                window.location = `/menu/master/inventory/search${
                  '' === this.state.id ? '' : `/id/${this.state.id}`
                }${'' === this.state.name ? '' : `/name/${this.state.name}`}${
                  '' === this.state.quantity
                    ? ''
                    : `/quantity/${this.state.quantity}`
                }${
                  '' === this.state.location
                    ? ''
                    : `/location/${this.state.location}`
                }${'' === this.state.type ? '' : `/type/${this.state.type}`}${
                  '' === this.state.group ? '' : `/group/${this.state.group}`
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
        navTable="masterInventory"
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

export default MasterInventorySearch;
