import React, { Component } from 'react';
import NavigationBar from '../../../../Generics/NavigationBar/NavigationBar';
import DisplayTable from '../../../../Generics/DisplayTable/DisplayTable';

class MasterQualitySearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ' '
    };
  }

  componentDidMount() {
    // TODO
    // api call to fetch quality tables
    // based on params :id and/or :name
    // onClick edit
    this.setState({
      resultTable: {
        columns: ['id', 'name'],
        rows: [
          {
            columns: ['QWE', 'Qwerty'],
            onClick: _ =>
              (window.location =
                '/menu/master/quality/edit/id/QWE/name/Qwerty/description/QWE%20Qwerty'),
            onMouseEnter: _ => this.setState({ footer: 'QWE Qwerty' })
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <NavigationBar table="masterQuality" />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            {this.state.resultTable ? (
              <DisplayTable table={this.state.resultTable} />
            ) : (
              <div className="container has-text-centered">
                <a class="button is-success is-loading is-large">Loading</a>
              </div>
            )}
          </div>
          <div className="hero-foot has-text-centered">
            <div className="button is-primary is-fullwidth is-large">
              {this.state.footer}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MasterQualitySearchResult;
