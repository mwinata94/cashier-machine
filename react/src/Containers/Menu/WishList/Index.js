import React, { Component } from 'react';
import MyHero from '../../../Generics/MyHero/MyHero';
import DisplayTable from '../../../Generics/DisplayTable/DisplayTable';

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // TODO
    // api call to fetch tables
    // api.fetchTable(window.location.pathname + /unordered).then( columns => setState(columns))
    // api.fetchTable(window.location.pathname + /ordered).then( columns => setState(columns))
    let unorderedData = [
      ['ID', 'QTY', 'FINAL QTY'],
      ['123', '1', '2'],
      ['456', '0', '0']
    ];
    let orderedData = [
      ['ID', 'ORDER QTY', 'SUPPLIER', 'FINAL QTY'],
      ['123', '1', 'abc', '2']
    ];
    this.setState({
      unorderedTable: {
        columns: unorderedData.shift(),
        rows: unorderedData.map(e => ({
          columns: e,
          onClick: _ =>
            (window.location = `${window.location.pathname}/edit/${e[0]}`)
        }))
      },
      orderedTable: {
        columns: orderedData.shift(),
        rows: orderedData.map(e => ({
          columns: e,
          onClick: _ =>
            (window.location = `${window.location.pathname}/edit/${e[0]}`)
        }))
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable="wishList"
        heroBody={
          <div className="columns" style={{ flex: '1 1 0', width: '100%' }}>
            <div className="column">
              <DisplayTable table={this.state.unorderedTable} />
            </div>
            <div className="column">
              <DisplayTable table={this.state.orderedTable} />
            </div>
          </div>
        }
        alignTop={true}
      />
    );
  }
}

export default WishList;
