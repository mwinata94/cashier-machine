import Index from './Index';
import Search from './Search';

const Route = [
  {
    path: '/menu/list/group',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search',
    exact: true,
    component: Search
  },
  {
    path: '/menu/list/group/search/id/:id',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search/name/:name',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search/description/:description',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search/id/:id/name/:name',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search/id/:id/description/:description',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search/name/:name/description/:description',
    exact: true,
    component: Index
  },
  {
    path: '/menu/list/group/search/id/:id/name/:name/description/:description',
    exact: true,
    component: Index
  }
];

export default Route;
