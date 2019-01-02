import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
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
      <div className="hero is-fullheight">
        <div className="hero-head">
          <NavigationBar table="masterLocation" />
        </div>
        <div className="hero-body">
          {this.state.createForm ? (
            <Form
              formAttributes={this.state.createForm}
              onChange={this.onChange}
            />
          ) : (
            <div className="container has-text-centered is-size-3">
              Loading...
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MasterLocationCreate;
