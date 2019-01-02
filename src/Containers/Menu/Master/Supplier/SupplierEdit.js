import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import Form from '../../../../Generics/Form/Form';

class MasterSupplierEdit extends Component {
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
              name: 'address',
              control: 'input',
              value: this.props.match.params.address
                ? this.props.match.params.address
                : ''
            },
            {
              name: 'phone number',
              control: 'input',
              value: this.props.match.params.phoneNumber
                ? this.props.match.params.phoneNumber
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
                window.location = '/menu/master/supplier';
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
        <NavigationBar table="masterSupplier" />
        <section className="hero is-fullheight">
          <div className="hero-head is-size-2">__</div>
          <div className="hero-body">
            {this.state.editForm ? (
              <Form
                formAttributes={this.state.editForm}
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

export default MasterSupplierEdit;
