import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import Form from '../Form/Form';

class UpdateTransactionDescription extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      description: ''
    };
  }

  componentDidMount() {
    if (!this.state.updateForm) {
      //   api.fetchDescription(window.location.pathname).then(data => {
      this.setState({
        updateForm: {
          queries: [
            {
              name: 'description',
              control: 'input'
              // value: data
            }
          ],
          buttons: [
            {
              name: 'update',
              onClick: _ => {
                /* TODO api edit */
                window.location = this.props.onUpdateLocation;
              }
            }
          ]
        }
      });
      //   });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <MyHero
        navTable={this.props.navTable}
        navTableParams={this.props.navTableParams}
        heroBody={
          <Form
            formAttributes={this.state.updateForm}
            onChange={this.onChange}
          />
        }
      />
    );
  }
}

export default UpdateTransactionDescription;
