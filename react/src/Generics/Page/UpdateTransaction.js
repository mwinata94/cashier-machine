import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import TableForm from '../TableForm/TableForm';
import DisplayTable from '../DisplayTable/DisplayTable';

class UpdateTransaction extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    if (!this.state.updateForm) {
      // api.fetchTransaction(window.location.pathname).then(data => {
      let data = [
        [
          {
            name: 'adjust id',
            control: 'select'
          },
          {
            name: 'date',
            control: 'label',
            value: '20' + this.props.tid.substring(3, 9)
          }
        ]
      ];
      data
        .filter(e => e.value)
        .map(e => {
          let object = {};
          object[e.name] = e.value;
          return this.setState(object);
        });
      this.setState({
        updateForm: {
          queries: data
        }
      });
      // api.fetchTransactionItem(window.location.pathname).then(items => {
      let dataFromFetch = [
        ['column1', 'column2', 'column3', 'column4'],
        ['data1column1', 'data1column2', 'data1column3', 'data1column4'],
        ['data2column1', 'data2column2', 'data2column3', 'data2column4']
      ];
      let columns = dataFromFetch.shift();
      columns.pop();
      columns.pop();
      columns.push('update');
      columns.push('delete');
      this.setState({
        itemTable: {
          columns,
          rows: dataFromFetch.map(e => {
            let dataColumn = e;
            let hoverData = dataColumn.pop();
            let order = dataColumn.pop();
            dataColumn.push(
              <div
                className="tile button is-small is-success"
                onClick={_ =>
                  (window.location = `${
                    window.location.pathname
                  }/order/${order}`)
                }
              />
            );
            dataColumn.push(
              <div
                className="tile button is-small is-danger"
                onClick={_ => console.log('delete button')}
              />
            );
            return {
              columns: dataColumn,
              onMouseEnter: _ => this.setState({ footer: hoverData })
            };
          })
        }
        // });
      });
      // });
    }
  }

  onChange(event) {
    if (event.target.name.includes('id')) {
      window.location = `${window.location.pathname.substring(
        0,
        window.location.pathname.lastIndexOf('/')
      )}/${event.target.value}`;
    } else {
      if (this.state[event.target.name] === event.target.value) {
        this.setState({ [event.target.name]: event.target.value });
        // api.updateTransactionAttribute()
      }
    }
  }

  render() {
    return (
      <MyHero
        navTable={this.props.navTable}
        navTableParams={this.props.navTableParams}
        heroBody={
          <div
            style={{
              flex: '1 1 0',
              width: '100%'
            }}
          >
            <TableForm
              tableFormAttributes={this.state.updateForm}
              onChange={this.onChange}
            />
            <DisplayTable table={this.state.itemTable} />
          </div>
        }
        alignTop={this.props.alignTop}
        footer={this.state.footer}
      />
    );
  }
}

export default UpdateTransaction;
