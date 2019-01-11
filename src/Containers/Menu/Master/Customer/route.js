import MasterCustomer from './Customer';
import MasterCustomerCreate from './CustomerCreate';
import MasterCustomerUpdate from './CustomerUpdate';
import MasterCustomerSearch from './CustomerSearch';

const MasterCustomerRoute = [
  {
    path: '/menu/master/customer',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/create',
    exact: true,
    component: MasterCustomerCreate
  },
  {
    path: '/menu/master/customer/update/:id',
    exact: true,
    component: MasterCustomerUpdate
  },
  {
    path: '/menu/master/customer/search',
    exact: true,
    component: MasterCustomerSearch
  },
  {
    path: '/menu/master/customer/search/id/:id',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/name/:name',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/name/:name',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/cut/:cut',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/description/:description',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/id/:id/name/:name',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/id/:id/cut/:cut',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/id/:id/description/:description',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/name/:name/cut/:cut',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/name/:name/description/:description',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/cut/:cut/description/:description',
    exact: true,
    component: MasterCustomer
  },
  {
    path: '/menu/master/customer/search/id/:id/name/:name/cut/:cut',
    exact: true,
    component: MasterCustomer
  },
  {
    path:
      '/menu/master/customer/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterCustomer
  },
  {
    path:
      '/menu/master/customer/search/name/:name/cut/:cut/description/:description',
    exact: true,
    component: MasterCustomer
  },
  {
    path:
      '/menu/master/customer/search/id/:id/name/:name/cut/:cut/description/:description',
    exact: true,
    component: MasterCustomer
  }
];

export default MasterCustomerRoute;
