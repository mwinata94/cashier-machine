import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class MasterRetailSaleEdit extends Component {
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
              name: 'starting date',
              control: 'input',
              value: this.props.match.params.startingDate
                ? this.props.match.params.startingDate
                : ''
            },
            {
              name: 'ending date',
              control: 'input',
              value: this.props.match.params.endingDate
                ? this.props.match.params.endingDate
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
                window.location = '/menu/master/retail sale';
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
        navTable="masterRetailSale"
        heroBody={
          <Form formAttributes={this.state.editForm} onChange={this.onChange} />
        }
      />
    );
  }
}

export default MasterRetailSaleEdit;
