import React, { Component } from 'react';
import MyHero from '../../../../Generics/MyHero/MyHero';
import TableForm from '../../../../Generics/TableForm/TableForm';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class TransactionAdjustUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    if (!this.state.editForm) {
      this.setState({
        editForm: {
          queries: [
            [
              {
                name: 'id',
                control: 'select',
                value: this.props.match.params.id,
                items: [this.props.match.params.id, 'todo api']
              },
              {
                name: 'date',
                control: 'label',
                value: '20' + this.props.match.params.id.substring(3, 9)
              }
            ]
          ]
        },
        itemTable: {
          columns: [
            'id',
            'name',
            <abbr title="quantity">qty</abbr>,
            'edit',
            'delete'
          ],
          rows: [
            {
              columns: [
                'QWE',
                'Qwerty',
                2,
                <div
                  className="tile button"
                  onClick={_ =>
                    (window.location = '/menu/transaction/adjust/QWE/order/1')
                  }
                >
                  edit
                </div>,
                <div
                  className="tile button"
                  onClick={_ => console.log('delete button')}
                >
                  delete
                </div>
              ],
              onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
            }
          ]
        }
      });
    }
  }

  onChange(_) {}

  render() {
    return (
      <MyHero
        navTable="transactionAdjustUpdate"
        navTableParams={this.props.match.params.id}
        heroBody={
          <div
            style={{
              flex: '1 1 0',
              width: '100%'
            }}
          >
            <TableForm
              tableFormAttributes={this.state.editForm}
              onChange={this.onChange}
            />
            <DisplayTable table={this.state.itemTable} />
          </div>
        }
        alignTop={true}
        footer={this.state.footer}
      />
    );
  }
}

export default TransactionAdjustUpdate;
