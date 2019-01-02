import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import Form from '../../../../Generics/Form/Form';

class MasterLocationEdit extends Component {
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
            }
          ],
          buttons: [
            {
              name: 'save',
              onClick: _ => {
                /* TODO api edit */
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
          {this.state.editForm ? (
            <Form
              formAttributes={this.state.editForm}
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

export default MasterLocationEdit;
