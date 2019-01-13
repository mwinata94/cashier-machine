import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import Form from '../../../../Generics/Form/Form';

class TransactionSalePayment extends Component {
  constructor(props) {
    super(props);
    this.buildForm = this.buildForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCutChange = this.onCutChange.bind(this);
    this.onCardChange = this.onCardChange.bind(this);
    this.onPaymentChange = this.onPaymentChange.bind(this);
    this.state = {
      total: 0,
      cut: 0,
      customerCut: 0,
      card: 'credit',
      cardValue: {
        cash: 0,
        debit: 1,
        credit: 3
      },
      finalTotal: 0,
      payment: 0,
      change: 0,
      onChange: {
        cut: this.onCutChange,
        card: this.onCardChange,
        payment: this.onPaymentChange
      }
    };
  }

  componentDidMount() {
    if (!this.state.paymentForm) {
      //   api.fetchTotal(window.location.pathname).then(data => {
      // this.setState({total: data, payment: 0, change: -data});
      let total = 100000;
      let cut = 0;
      let customerCut = Math.floor((total * 6) / 100);
      let card = 'credit';
      let finalTotal = Math.ceil(
        ((total - cut - customerCut) * (100 + this.state.cardValue[card])) / 100
      );
      let payment = 0;
      let change = payment - finalTotal;
      this.setState({
        total,
        cut,
        customerCut,
        card,
        finalTotal,
        payment,
        change,
        // paymentForm: this.buildForm(data, 0, 0)
        paymentForm: this.buildForm(
          total,
          cut,
          customerCut,
          card,
          finalTotal,
          payment,
          change
        )
      });
    }
  }

  buildForm(total, cut, customerCut, card, finalTotal, payment, change) {
    return {
      queries: [
        {
          name: 'total',
          control: 'label',
          value: total
        },
        {
          name: 'cut',
          control: 'input',
          type: 'number',
          value: cut
        },
        {
          name: 'customer cut',
          control: 'label',
          value: customerCut
        },
        {
          name: 'card',
          control: 'select',
          items: ['credit', 'debit', 'cash'],
          value: this.state.cardValue[card]
        },
        {
          name: 'final total',
          control: 'label',
          value: finalTotal
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
            // api.print(window.location.pathname, data).then(_ => (window.location='/menu/transaction/sale'))
            window.location = '/menu/transaction/sale';
          }
        }
      ]
    };
  }

  onChange(event) {
    this.setState(this.state.onChange[event.target.name](event.target.value));
  }

  onCutChange(value) {
    let cut = value;
    let finalTotal = Math.ceil(
      ((this.state.total - cut - this.state.customerCut) *
        (100 + this.state.cardValue[this.state.card])) /
        100
    );
    let change = this.state.payment - finalTotal;
    return {
      cut,
      finalTotal,
      change,
      paymentForm: this.buildForm(
        this.state.total,
        cut,
        this.state.customerCut,
        this.state.card,
        finalTotal,
        this.state.payment,
        change
      )
    };
  }

  onCardChange(value) {
    let card = value;
    let finalTotal = Math.ceil(
      ((this.state.total - this.state.cut - this.state.customerCut) *
        (100 + this.state.cardValue[card])) /
        100
    );
    let change = this.state.payment - finalTotal;
    return {
      card,
      finalTotal,
      change,
      paymentForm: this.buildForm(
        this.state.total,
        this.state.cut,
        this.state.customerCut,
        card,
        finalTotal,
        this.state.payment,
        change
      )
    };
  }

  onPaymentChange(value) {
    let payment = value;
    let change = payment - this.state.finalTotal;
    return {
      payment,
      change,
      paymentForm: this.buildForm(
        this.state.total,
        this.state.cut,
        this.state.customerCut,
        this.state.card,
        this.state.finalTotal,
        payment,
        change
      )
    };
  }

  render() {
    return (
      <MyHero
        navTable="transactionSaleUpdate"
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

export default TransactionSalePayment;
