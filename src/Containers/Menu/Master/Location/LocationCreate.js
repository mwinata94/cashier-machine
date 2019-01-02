import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class MasterLocationCreate extends Component {
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
              name: 'description',
              control: 'input'
            }
          ],
          buttons: [
            {
              name: 'create',
              onClick: _ => {
                /* TODO api create */
                window.location = '/menu/master/location';
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
        navTable="masterLocation"
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

export default MasterLocationCreate;
