export const masterInventory = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/inventory/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/inventory/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/inventory')
  },
  {
    name: 'back',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterSupplier = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/supplier/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/supplier/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/supplier')
  },
  {
    name: 'back',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterRetailSale = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/retail sale/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/retail sale/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/retail sale')
  },
  {
    name: 'back',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterMechanic = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/mechanic/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/mechanic/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/mechanic')
  },
  {
    name: 'back',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

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

export const masterLocation = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/location/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/location/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/location')
  },
  {
    name: 'back',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterType = [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/type/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/type/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/type')
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
        name: 'inventory',
        onClick: event => {
          window.location = '/menu/master/inventory';
        }
      },
      {
        name: 'divider'
      },
      {
        name: 'supplier',
        onClick: event => {
          window.location = '/menu/master/supplier';
        }
      },
      {
        name: 'retail sale',
        onClick: event => {
          window.location = '/menu/master/retailsale';
        }
      },
      {
        name: 'mechanic',
        onClick: event => {
          window.location = '/menu/master/mechanic';
        }
      },
      {
        name: 'divider'
      },
      {
        name: 'location',
        onClick: event => {
          window.location = '/menu/master/location';
        }
      },
      {
        name: 'type',
        onClick: event => {
          window.location = '/menu/master/type';
        }
      },
      {
        name: 'group',
        onClick: event => {
          window.location = '/menu/master/group';
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
