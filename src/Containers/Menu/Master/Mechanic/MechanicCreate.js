import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class MasterMechanicCreate extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentDidMount() {
    if (!this.state.createForm) {
      this.setState({
        createForm: {
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
              name: 'create',
              onClick: _ => {
                /* TODO api create */
                window.location = '/menu/master/mechanic';
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
            formAttributes={this.state.createForm}
            onChange={this.onChange}
          />
        }
      />
    );
  }
}

export default MasterMechanicCreate;