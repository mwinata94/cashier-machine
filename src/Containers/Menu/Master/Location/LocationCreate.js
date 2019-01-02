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
      <div>
        <NavigationBar table="masterLocation" />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            {this.state.createForm ? (
              <Form
                formAttributes={this.state.createForm}
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

export default MasterLocationCreate;
