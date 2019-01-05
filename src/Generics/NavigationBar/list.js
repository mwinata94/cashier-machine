export const masterInventory = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterSupplier = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterRetailSale = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterMechanic = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterGroup = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterLocation = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const masterType = _ => [
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
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const transactionAdjust = _ => [
  {
    name: 'create',
    align: 'left',
    onClick: _ => {
      /* todo api */
    }
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const transactionAdjustUpdate = id => [
  {
    name: 'add',
    align: 'left',
    onClick: _ => {
      /* todo api */
    }
  },
  {
    name: 'description',
    align: 'left',
    onClick: _ =>
      (window.location = `/menu/transaction/adjust/${id}/description`)
  },
  {
    name: 'finish',
    align: 'left',
    onClick: _ => {
      /* todo api */
    }
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/transaction/adjust')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const menu = _ => [
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
          window.location = '/menu/master/retail sale';
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
        name: 'return purchase',
        onClick: event => {
          window.location = '/menu/transaction/return purchase';
        }
      },
      {
        name: 'sale',
        onClick: event => {
          window.location = '/menu/transaction/sale';
        }
      },
      {
        name: 'service',
        onClick: event => {
          window.location = '/menu/transaction/service';
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
        name: 'return purchase',
        onClick: event => {
          window.location = '/menu/report/return purchase';
        }
      },
      {
        name: 'sale',
        onClick: event => {
          window.location = '/menu/report/sale';
        }
      },
      {
        name: 'service',
        onClick: event => {
          window.location = '/menu/report/service';
        }
      },
      {
        name: 'supplier',
        onClick: event => {
          window.location = '/menu/report/supplier';
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
