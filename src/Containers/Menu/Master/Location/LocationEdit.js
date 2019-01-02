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
      <div>
        <NavigationBar table="masterLocation" />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            {this.state.editForm ? (
              <Form
                formAttributes={this.state.editForm}
                onChange={this.onChange}
              />
            ) : (
              <div className="container has-text-centered">
                <a class="button is-success is-loading is-large">Loading</a>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default MasterLocationEdit;
