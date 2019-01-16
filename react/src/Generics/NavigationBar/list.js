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

export const masterCustomer = _ => [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/customer/create')
  },
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/customer/search')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/master/customer')
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
    onClick: _ => (window.location = `/menu/transaction/adjust/${id}/search`)
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
      /* todo api print */
      window.location = `/menu/transaction/adjust`;
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

export const transactionPurchase = _ => [
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

export const transactionPurchaseUpdate = id => [
  {
    name: 'add',
    align: 'left',
    onClick: _ => (window.location = `/menu/transaction/purchase/${id}/search`)
  },
  {
    name: 'description',
    align: 'left',
    onClick: _ =>
      (window.location = `/menu/transaction/purchase/${id}/description`)
  },
  {
    name: 'finish',
    align: 'left',
    onClick: _ => (window.location = `/menu/transaction/purchase/${id}/payment`)
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/transaction/purchase')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const transactionReturnPurchase = _ => [
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

export const transactionReturnPurchaseUpdate = id => [
  {
    name: 'add',
    align: 'left',
    onClick: _ =>
      (window.location = `/menu/transaction/return purchase/${id}/search`)
  },
  {
    name: 'description',
    align: 'left',
    onClick: _ =>
      (window.location = `/menu/transaction/return purchase/${id}/description`)
  },
  {
    name: 'finish',
    align: 'left',
    onClick: _ => {
      /* todo api print */
      window.location = `/menu/transaction/return purchase`;
    }
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/transaction/return purchase')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const transactionSale = _ => [
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

export const transactionSaleUpdate = id => [
  {
    name: 'add',
    align: 'left',
    onClick: _ => (window.location = `/menu/transaction/sale/${id}/search`)
  },
  {
    name: 'description',
    align: 'left',
    onClick: _ => (window.location = `/menu/transaction/sale/${id}/description`)
  },
  {
    name: 'finish',
    align: 'left',
    onClick: _ => (window.location = `/menu/transaction/sale/${id}/payment`)
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/transaction/sale')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const transactionService = _ => [
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

export const transactionServiceUpdate = id => [
  {
    name: 'add',
    align: 'left',
    onClick: _ => (window.location = `/menu/transaction/service/${id}/search`)
  },
  {
    name: 'instruction',
    align: 'left',
    onClick: _ =>
      (window.location = `/menu/transaction/service/${id}/instruction`)
  },
  {
    name: 'description',
    align: 'left',
    onClick: _ =>
      (window.location = `/menu/transaction/service/${id}/description`)
  },
  {
    name: 'finish',
    align: 'left',
    onClick: _ => {
      /* todo api print */
      window.location = `/menu/transaction/service`;
    }
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/transaction/service')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportAdjust = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/adjust')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportInventory = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/inventory')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportPurchase = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/purchase')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportReturnPurchase = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/return purchase')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportSale = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/sale')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportService = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/service')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const reportSupplier = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/report/supplier')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const listGroup = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/list/group')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const listInventory = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/list/inventory')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const listLocation = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/list/location')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const listSupplier = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/list/supplier')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const listType = _ => [
  {
    name: 'search',
    align: 'left',
    onClick: _ => (window.location = '/menu/list/type')
  },
  {
    name: 'menu',
    align: 'right',
    onClick: event => (window.location = '/menu')
  }
];

export const wishList = _ => [
  {
    name: 'create',
    align: 'left',
    onClick: _ => (window.location = '/menu/wishlist/create')
  },
  {
    name: 'order',
    align: 'left',
    onClick: _ => (window.location = '/menu/wishlist/order')
  },
  {
    name: 'default',
    align: 'left',
    onClick: _ => (window.location = '/menu/wishlist')
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
      },
      {
        name: 'customer',
        onClick: event => {
          window.location = '/menu/master/customer';
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
    name: 'list',
    align: 'left',
    onClick: event => {},
    child: [
      {
        name: 'inventory',
        onClick: event => {
          window.location = '/menu/list/inventory';
        }
      },
      {
        name: 'divider'
      },
      {
        name: 'supplier',
        onClick: event => {
          window.location = '/menu/list/supplier';
        }
      },
      {
        name: 'divider'
      },
      {
        name: 'location',
        onClick: event => {
          window.location = '/menu/list/location';
        }
      },
      {
        name: 'type',
        onClick: event => {
          window.location = '/menu/list/type';
        }
      },
      {
        name: 'group',
        onClick: event => {
          window.location = '/menu/list/group';
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
