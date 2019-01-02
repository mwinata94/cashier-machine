import MasterRetailSale from './RetailSale';
import MasterRetailSaleCreate from './RetailSaleCreate';
import MasterRetailSaleEdit from './RetailSaleEdit';
import MasterRetailSaleSearch from './RetailSaleSearch';
import MasterRetailSaleSearchResult from './RetailSaleSearchResult';

const MasterRetailSaleRoute = [
  {
    path: '/menu/master/retail sale',
    exact: true,
    component: MasterRetailSale
  },
  {
    path: '/menu/master/retail sale/create',
    exact: true,
    component: MasterRetailSaleCreate
  },
  {
    path: '/menu/master/retail sale/edit/id/:id/name/:name',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/starting date/:startingDate',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path:
      '/menu/master/retail sale/edit/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleEdit
  },
  {
    path: '/menu/master/retail sale/search',
    exact: true,
    component: MasterRetailSaleSearch
  },
  {
    path: '/menu/master/retail sale/search/id/:id',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/name/:name',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/starting date/:startingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/ending date/endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/id/:id/name/:name',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/id/:id/starting date/:startingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/id/:id/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/id/:id/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/name/:name/starting date/:startingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/name/:name/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/name/:name/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/id/:id/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/name/:name/starting date/:startingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/name/:name/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path: '/menu/master/retail sale/search/name/:name/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/name/:name/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/name/:name/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/name/:name/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  },
  {
    path:
      '/menu/master/retail sale/search/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterRetailSaleSearchResult
  }
];

export default MasterRetailSaleRoute;
