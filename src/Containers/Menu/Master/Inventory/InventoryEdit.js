import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class MasterInventoryEdit extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentDidMount() {
    if (!this.state.editForm) {
      this.setState({
        editForm: {
          queries: [
            {
              name: 'id',
              control: 'input',
              value: this.props.match.params.id
            },
            {
              name: 'name',
              control: 'input',
              value: this.props.match.params.name
            },
            {
              name: 'quantity',
              control: 'input',
              value: this.props.match.params.quantity
            },
            {
              name: 'purchase price',
              control: 'input',
              value: 'todo api'
            },
            {
              name: 'sale price',
              control: 'input',
              value: this.props.match.params.salePrice
            },
            {
              name: 'location',
              control: 'select',
              items: [],
              value: this.props.match.params.location
                ? this.props.match.params.location
                : ''
            },
            {
              name: 'type',
              control: 'select',
              items: [],
              value: this.props.match.params.type
                ? this.props.match.params.type
                : ''
            },
            {
              name: 'group',
              control: 'select',
              items: [],
              value: this.props.match.params.group
                ? this.props.match.params.group
                : ''
            },
            {
              name: 'description',
              control: 'input',
              value: this.props.match.params.description
                ? this.props.match.params.description
                : ''
            }
          ],
          buttons: [
            {
              name: 'save',
              onClick: _ => {
                /* TODO api edit */
                window.location = '/menu/master/inventory';
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
          <Form formAttributes={this.state.editForm} onChange={this.onChange} />
        }
      />
    );
  }
}

export default MasterInventoryEdit;
