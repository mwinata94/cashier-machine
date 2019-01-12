import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class TransactionPurchasePayment extends Component {
  constructor(props) {
    super(props);
    this.buildForm = this.buildForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      total: 0,
      payment: 0,
      change: 0
    };
  }

  componentDidMount() {
    if (!this.state.paymentForm) {
      //   api.fetchTotal(window.location.pathname).then(data => {
      // this.setState({total: data, payment: 0, change: -data});
      this.setState({
        total: 100000,
        payment: 0,
        change: -100000,
        // paymentForm: this.buildForm(data, 0, 0)
        paymentForm: this.buildForm(100000, 0, -100000)
      });
    }
  }

  buildForm(total, payment, change) {
    return {
      queries: [
        {
          name: 'total',
          control: 'label',
          value: total
        },
        {
          name: 'payment',
          control: 'input',
          type: 'number',
          value: payment
        },
        {
          name: 'change',
          control: 'label',
          value: change
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
    };
  }

  onChange(event) {
    let payment = event.target.value;
    let change = payment - this.state.total;
    this.setState({
      payment,
      change,
      paymentForm: this.buildForm(this.state.total, payment, change)
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
