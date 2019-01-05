import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import Form from '../Form/Form';

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentDidMount() {
    if (!this.state.createForm) {
      this.setState({
        createForm: {
          queries: this.props.queries,
          buttons: [
            {
              name: 'create',
              onClick: _ => {
                let data = {};
                this.props.queries.map(
                  e => (data[e.name] = this.state[e.name])
                );
                // TODO api create
                // api.create(window.location.pathname, data).then(_ => (window.location=this.props.onCreateLocation))
                window.location = this.props.onCreateLocation;
              }
            }
          ]
        }
      });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <MyHero
        navTable={this.props.navTable}
        navTableParams={this.props.navTableParams}
        heroBody={
          <Form
            formAttributes={this.state.createForm}
            onChange={this.onChange}
          />
        }
      />
    );
  }
}

export default Create;
