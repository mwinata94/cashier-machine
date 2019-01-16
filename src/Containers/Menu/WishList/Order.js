import React, { Component } from 'react';
import MyHero from '../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../Generics/DisplayTable/DisplayTable';

class Order extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onOrder = this.onOrder.bind(this);
    this.state = {
      value: {}
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch tables
    // api.fetchTable(/master/supplier).then( data => setState(supplier:data))
    // api.fetchTable(window.location.pathname + /order).then( columns => setState(columns))
    let supplierData = ['abc', 'def'];
    let orderData = [['ID', 'QTY', 'FINAL QTY'], ['123', 1, 2], ['456', 0, 0]];
    let columns = orderData.shift();
    columns.push('SUPPLIER');
    columns.push('ORDER QTY');
    this.setState({
      orderTable: {
        columns,
        rows: orderData.map((e, i) => {
          let columns = e.filter(e => true);
          columns.push(
            <div className="select is-info is-fullwidth">
              <select>
                {supplierData.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          );
          columns.push(
            <input
              className="input"
              placeholder={0}
              type={'number'}
              min={0}
              onChange={event => this.onChange(event, i, e[2])}
            />
          );
          return {
            columns
          };
        })
      }
    });
  }

  onChange(event, index, value) {
    let offset = parseInt(event.target.value, 10);
    let { value: tempValue, orderTable: tempTable } = this.state;
    if (0 < offset) {
      tempValue[index] = offset;
      tempTable.rows[index].columns[2] = value + offset;
    } else {
      tempValue[index] = 0;
      tempTable.rows[index].columns[2] = value;
    }
    this.setState({ value: tempValue, orderTable: tempTable });
  }

  onCopy(_) {
    let text = this.state.orderTable.rows
      .reduce((filtered, e, i) => {
        let value = this.state.value[i];
        if (0 < value) {
          filtered.push(`${e.columns[0]}\t${value}\n`);
        }
        return filtered;
      }, [])
      .join('');
    let textArea = document.createElement('textarea');
    textArea.innerText = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }

  onOrder(_) {
    console.log('todo api');
  }

  render() {
    return (
      <MyHero
        navTable="wishList"
        heroBody={
          <div style={{ flex: '1 1 0', width: '100%' }}>
            <DisplayTable table={this.state.orderTable} />
            <div className="tile">
              <div className="tile button" onClick={this.onCopy}>
                Copy
              </div>
              <div className="tile button" onClick={this.onOrder}>
                Order
              </div>
            </div>
          </div>
        }
        alignTop={true}
      />
    );
  }
}

export default Order;
