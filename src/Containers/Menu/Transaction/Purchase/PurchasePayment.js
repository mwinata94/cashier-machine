import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class TransactionPurchasePayment extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentDidMount() {
    if (!this.state.paymentForm) {
      //   api.fetchTotal(window.location.pathname).then(data => {
      // this.setState({change: data});
      this.setState({ total: 100000, payment: 0, change: 100000 });
      this.setState({
        paymentForm: {
          queries: [
            {
              name: 'total',
              control: 'label',
              value: 100000
              // value: data
            },
            {
              name: 'payment',
              control: 'input'
            },
            {
              name: 'change',
              control: 'label',
              value: this.state.change
            }
          ],
          buttons: [
            {
              name: 'done',
              onClick: _ => {
                // TODO api print
                // api.print(window.location.pathname, data).then(_ => (window.location='/menu/transaction/purchase'))
                window.location = '/menu/transaction/purchase';
              }
            }
          ]
        }
      });
    }
  }

  onChange(event) {
    this.setState({
      payment: event.target.value,
      change: this.state.total - event.target.value
    });
  }

  render() {
    return (
      <MyHero
        navTable="transactionPurchaseUpdate"
        navTableParams={this.props.match.params.tid}
        heroBody={
          <Form
            formAttributes={this.state.paymentForm}
            onChange={this.onChange}
          />
        }
      />
    );
  }
}

export default TransactionPurchasePayment;
