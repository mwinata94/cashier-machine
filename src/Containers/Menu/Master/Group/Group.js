import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';
import Form from '../../../../Generics/Form/Form';

class MasterGroup extends Component {
  constructor(props) {
    super(props);
    this.renderBody = this.renderBody.bind(this);
    this.state = {
      navigationBarTable: [
        {
          name: 'create',
          align: 'left',
          onClick: _ => {
            if ('create' === this.state.display) {
              this.state.display = 'default';
            } else {
              this.state.display = 'create';
            }
          },
          child: []
        },
        {
          name: 'search',
          align: 'left',
          onClick: _ => {
            if ('search' === this.state.display) {
              this.state.display = 'default';
            } else {
              this.state.display = 'search';
            }
          },
          child: []
        },
        {
          name: 'back',
          align: 'right',
          onClick: event => {
            window.location = '../../menu';
          },
          child: []
        }
      ],
      defaultTable: {},
      searchResultTable: {},
      createForm: {
        queries: [
          {
            name: 'id',
            control: 'input'
          },
          {
            name: 'name',
            control: 'input'
          }
        ],
        buttons: [
          {
            name: 'create',
            onClick: _ => {
              /* api create */
            }
          }
        ]
      },
      editForm: {},
      searchForm: {
        queries: [],
        buttons: [
          {
            name: 'search',
            onClick: _ => {
              /* api search */
            }
          }
        ]
      },
      display: 'default',
      displayReady: false
    };
  }

  componentDidMount() {
    // api call to fetch group tables
    // onClick edit
  }

  renderBody() {
    const body = {
      default: <DisplayTable table={this.state.defaultTable} />,
      searchResult: <DisplayTable table={this.state.searchResultTable} />,
      create: <Form formAttributes={this.state.createForm} />,
      edit: <Form formAttributes={this.state.editForm} />,
      search: <Form formAttributes={this.state.searchForm} />
    };
    return body[this.state.display];
  }

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <NavigationBar table={this.state.navigationBarTable} />
        </div>
        <div className="hero-body">
          {this.state.displayReady ? (
            this.renderBody()
          ) : (
            <div className="container has-text-centered is-size-3">
              Loading...
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MasterGroup;
