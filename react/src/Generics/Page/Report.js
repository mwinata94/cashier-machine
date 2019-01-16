import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import ReportTable from '../ReportTable/ReportTable';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch tables
    // api.fetchTable(window.location.pathname).then( columns => setState(columns))
    let dataFromFetch = [
      ['col1ID', 'col2Date', 'col3Desc'],
      [
        ['data1col1', 'data1col2', 'data1col3'],
        ['col1ID', 'col2Name', 'col3QTY', 'col4Desc'],
        ['exID1', 'exName1', 1, 'exDesc1'],
        ['exID2', 'exName2', 2, 'exDesc2'],
        ['exID3', 'exName3', 3, 'exDesc3']
      ],
      [
        ['data2col1', 'data2col2', 'data2col3'],
        ['col1ID', 'col2Name', 'col3QTY', 'col4Desc'],
        ['exID1', 'exName1', 9, 'exDesc1'],
        ['exID2', 'exName2', 3, 'exDesc2'],
        ['exID3', 'exName3', 12, 'exDesc3']
      ]
    ];
    let columns = dataFromFetch.shift();
    columns.pop();
    this.setState({
      reportTable: {
        columns,
        rows: dataFromFetch.map((e, i) => {
          let data = e;
          let footer = data[0].pop();
          let columns = data.shift();
          let innerColumns = data.shift();
          innerColumns.pop();
          return {
            columns,
            data: {
              columns: innerColumns,
              rows: data.map(e => {
                let footer = e.pop();
                return {
                  columns: e,
                  onMouseEnter: _ => this.setState({ footer })
                };
              })
            },
            onMouseEnter: _ => this.setState({ footer })
          };
        })
      }
    });
  }

  render() {
    return (
      <MyHero
        navTable={this.props.navTable}
        navTableParams={this.props.navTableParams}
        heroBody={<ReportTable table={this.state.reportTable} />}
        alignTop={this.props.alignTop}
        footer={this.state.footer}
      />
    );
  }
}

export default Index;
