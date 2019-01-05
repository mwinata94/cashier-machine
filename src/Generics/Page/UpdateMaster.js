import React, { Component } from 'react';
import MyHero from '../MyHero/MyHero';
import Form from '../Form/Form';

class UpdateMaster extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentDidMount() {
    if (!this.state.updateForm) {
      /*
      api.fetchItem(window.location.pathname).then(data => {
        data
          .filter(e => e.value)
          .map(e => {
            let object = {};
            object[e.name] = e.value;
            return this.setState(object);
          });
        this.setState({
          updateForm: {
            queries: data,
            buttons: [
              {
                name: 'update',
                onClick: _ => {
                  let sendData = {};
                  data.map(
                    e => (sendData[e.name] = this.state[e.name])
                  );
                  api
                    .update(window.location.pathname, sendData)
                    .then(_ => (window.location = this.props.onUpdateLocation));
                }
              }
            ]
          }
        });
      });
      */
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
            formAttributes={this.state.updateForm}
            onChange={this.onChange}
          />
        }
      />
    );
  }
}

export default UpdateMaster;
