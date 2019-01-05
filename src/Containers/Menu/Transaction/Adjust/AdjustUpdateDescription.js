import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class TransactionAdjustUpdateDescription extends Component {
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
              name: 'description',
              control: 'input',
              value: ''
            }
          ],
          buttons: [
            {
              name: 'save',
              onClick: _ => {
                /* TODO api edit */
                window.location = `/menu/transaction/adjust/${
                  this.props.match.params.id
                }`;
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
        navTable="transactionAdjustUpdate"
        navTableParams={this.props.match.params.id}
        heroBody={
          <Form formAttributes={this.state.editForm} onChange={this.onChange} />
        }
        alignTop={true}
      />
    );
  }
}

export default TransactionAdjustUpdateDescription;
