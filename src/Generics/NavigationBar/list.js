export const masterGroup = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/group/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/group/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/group')
  },
  {
    name: 'back',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const menu = [
  {
    name: 'master',
    align: 'left',
    onClick: event => {},
    child: [
      {
        name: 'group',
        onClick: event => {
          window.location = '/menu/master/group';
        }
      },
      {
        name: 'inventory',
        onClick: event => {
          window.location = '/menu/master/inventory';
        }
      },
      {
        name: 'location',
        onClick: event => {
          window.location = '/menu/master/location';
        }
      },
      {
        name: 'mechanic',
        onClick: event => {
          window.location = '/menu/master/mechanic';
        }
      },
      {
        name: 'quality',
        onClick: event => {
          window.location = '/menu/master/quality';
        }
      },
      {
        name: 'retail sale',
        onClick: event => {
          window.location = '/menu/master/retailsale';
        }
      },
      {
        name: 'supplier',
        onClick: event => {
          window.location = '/menu/master/supplier';
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
          window.location = '/menu/transaction/adjust';
        }
      },
      {
        name: 'purchase',
        onClick: event => {
          window.location = '/menu/transaction/purchase';
        }
      },
      {
        name: 'sale',
        onClick: event => {
          window.location = '/menu/transaction/sale';
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
          window.location = '/menu/report/adjust';
        }
      },
      {
        name: 'inventory',
        onClick: event => {
          window.location = '/menu/report/inventory';
        }
      },
      {
        name: 'purchase',
        onClick: event => {
          window.location = '/menu/report/purchase';
        }
      },
      {
        name: 'sale',
        onClick: event => {
          window.location = '/menu/report/sale';
        }
      }
    ]
  },
  {
    name: 'wish list',
    align: 'right',
    onClick: event => {
      window.location = './menu/wishlist';
    }
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
];
