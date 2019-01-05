import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import DisplayTable from '../DisplayTable/DisplayTable';

class Index extends Component {
  constructor(props) {
    super(props);
    this.windowLocation = this.windowLocation.bind(this);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch tables
    // api.fetchTable(window.location.pathname).then( columns => setState(columns))
    let dataFromFetch = [
      ['column1', 'column2', 'column3', 'column4'],
      ['data1column1', 'data1column2', 'data1column3', 'data1column4'],
      ['data2column1', 'data2column2', 'data2column3', 'data2column4']
    ];
    let columns = dataFromFetch.shift();
    columns.pop();
    this.setState({
      defaultTable: {
        columns,
        rows: dataFromFetch.map((e, i) => {
          let dataColumn = e;
          let hoverData = dataColumn.pop();
          return {
            columns: dataColumn,
            onClick: _ => {
              if (this.props.onClickAPI) {
                this.props.onClickAPI(dataColumn[0]).then(this.windowLocation);
              } else {
                this.windowLocation(dataColumn[0]);
              }
            },
            onMouseEnter: _ => this.setState({ footer: hoverData })
          };
        })
      }
    });
  }

  windowLocation(id) {
    if (this.props.onClickLocation) {
      if (this.props.onClickLocationAppendId) {
        window.location = `${this.props.onClickLocation}/${id}`;
      } else {
        window.location = this.props.onClickLocation;
      }
    }
  }

  render() {
    return (
      <MyHero
        navTable={this.props.navTable}
        navTableParams={this.props.navTableParams}
        heroBody={<DisplayTable table={this.state.defaultTable} />}
        alignTop={this.props.alignTop}
        footer={this.state.footer}
      />
    );
  }
}

export default Index;
