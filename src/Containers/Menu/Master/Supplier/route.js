import MasterSupplier from './Supplier';
import MasterSupplierCreate from './SupplierCreate';
import MasterSupplierEdit from './SupplierEdit';
import MasterSupplierSearch from './SupplierSearch';
import MasterSupplierSearchResult from './SupplierSearchResult';

const MasterSupplierRoute = [
  {
    path: '/menu/master/supplier',
    exact: true,
    component: MasterSupplier
  },
  {
    path: '/menu/master/supplier/create',
    exact: true,
    component: MasterSupplierCreate
  },
  {
    path: '/menu/master/supplier/edit/id/:id/name/:name',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path: '/menu/master/supplier/edit/id/:id/name/:name/address/:address',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path:
      '/menu/master/supplier/edit/id/:id/name/:name/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path:
      '/menu/master/supplier/edit/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path:
      '/menu/master/supplier/edit/id/:id/name/:name/address/:address/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path:
      '/menu/master/supplier/edit/id/:id/name/:name/address/:address/description/:description',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path:
      '/menu/master/supplier/edit/id/:id/name/:name/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path:
      '/menu/master/supplier/edit/id/:id/name/:name/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierEdit
  },
  {
    path: '/menu/master/supplier/search',
    exact: true,
    component: MasterSupplierSearch
  },
  {
    path: '/menu/master/supplier/search/id/:id',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/id/:id/name/:name',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/id/:id/name/:name/address/:address',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/name/:name/address/:address/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/name/:name/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/name/:name/address/:address/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/name/:name/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/name/:name/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/id/:id/address/:address',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/address/:address/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/address/:address/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/id/:id/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/id/:id/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/id/:id/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/name/:name',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/name/:name/address/:address',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/name/:name/address/:address/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/name/:name/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/name/:name/address/:address/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/name/:name/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/name/:name/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/name/:name/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/address/:address',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/address/:address/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/address/:address/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/phone number/:phoneNumber',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path:
      '/menu/master/supplier/search/phone number/:phoneNumber/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  },
  {
    path: '/menu/master/supplier/search/description/:description',
    exact: true,
    component: MasterSupplierSearchResult
  }
];

export default MasterSupplierRoute;
