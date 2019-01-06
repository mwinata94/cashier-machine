import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

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
      //   api.fetchInstruction(window.location.pathname).then(data => {
      this.setState({
        updateForm: {
          queries: [
            {
              name: 'instruction',
              control: 'textarea',
              rows: 3,
              cols: 60
              // value: data
            }
          ],
          buttons: [
            {
              name: 'update',
              onClick: _ => {
                /* TODO api update */
                window.location = `/menu/transaction/service/${
                  this.props.match.params.tid
                }`;
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
        navTable="transactionServiceUpdate"
        navTableParams={this.props.match.params.tid}
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
