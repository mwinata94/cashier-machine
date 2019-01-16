import Result from './Result';
import Search from './Search';

const Route = [
  {
    path: '/menu/list/supplier',
    exact: true,
    component: Search
  },
  {
    path: '/menu/list/supplier/id/:id',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/name/:name/address/:address',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/name/:name/address/:address/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/name/:name/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/name/:name/address/:address/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/name/:name/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/name/:name/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/address/:address',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/address/:address/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/address/:address/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/id/:id/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/id/:id/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/name/:name',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/name/:name/address/:address',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/name/:name/address/:address/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/name/:name/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/name/:name/address/:address/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/name/:name/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/name/:name/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/name/:name/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/address/:address',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/address/:address/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/address/:address/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/address/:address/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/phone number/:phoneNumber',
    exact: true,
    component: Result
  },
  {
    path:
      '/menu/list/supplier/phone number/:phoneNumber/description/:description',
    exact: true,
    component: Result
  },
  {
    path: '/menu/list/supplier/description/:description',
    exact: true,
    component: Result
  }
];

export default Route;
