import React, { Component } from 'react';
import NavigationBar from '../../Generics/NavigationBar';
import Time from 'react-time';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        {NavigationBar([
          {
            name: 'master',
            align: 'left',
            onClick: event => {},
            child: [
              {
                name: 'group',
                onClick: event => {
                  window.location = './menu/master/group';
                }
              },
              {
                name: 'inventory',
                onClick: event => {
                  window.location = './menu/master/inventory';
                }
              },
              {
                name: 'location',
                onClick: event => {
                  window.location = './menu/master/location';
                }
              },
              {
                name: 'mechanic',
                onClick: event => {
                  window.location = './menu/master/mechanic';
                }
              },
              {
                name: 'quality',
                onClick: event => {
                  window.location = './menu/master/quality';
                }
              },
              {
                name: 'retail sale',
                onClick: event => {
                  window.location = './menu/master/retailsale';
                }
              },
              {
                name: 'supplier',
                onClick: event => {
                  window.location = './menu/master/supplier';
                }
              }
            ]
          },
          {
            name: 'transaction',
            align: 'left',
            onClick: event => {},
            child: [
              {
                name: 'adjust',
                onClick: event => {
                  window.location = './menu/transaction/adjust';
                }
              },
              {
                name: 'purchase',
                onClick: event => {
                  window.location = './menu/transaction/purchase';
                }
              },
              {
                name: 'sale',
                onClick: event => {
                  window.location = './menu/transaction/sale';
                }
              }
            ]
          },
          {
            name: 'report',
            align: 'left',
            onClick: event => {},
            child: [
              {
                name: 'adjust',
                onClick: event => {
                  window.location = './menu/report/adjust';
                }
              },
              {
                name: 'inventory',
                onClick: event => {
                  window.location = './menu/report/inventory';
                }
              },
              {
                name: 'purchase',
                onClick: event => {
                  window.location = './menu/report/purchase';
                }
              },
              {
                name: 'sale',
                onClick: event => {
                  window.location = './menu/report/sale';
                }
              }
            ]
          },
          {
            name: 'wish list',
            align: 'right',
            onClick: event => {
              window.location = './menu/wishlist';
            },
            child: []
          },
          {
            name: 'options',
            align: 'right',
            onClick: event => {},
            child: [
              {
                name: 'logout',
                onClick: event => {
                  // to do backend api
                }
              }
            ]
          }
        ])}
        <div>
          <p>
            Today is
            <br />
            <Time value={this.state.time} format="YYYY/MM/DD" />
            <br />
            <Time value={this.state.time} format="HH:mm:ss" />
          </p>
        </div>
      </div>
    );
  }
}

export default Menu;
