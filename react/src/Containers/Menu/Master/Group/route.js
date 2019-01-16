import MasterGroup from './Group';
import MasterGroupCreate from './GroupCreate';
import MasterGroupUpdate from './GroupUpdate';
import MasterGroupSearch from './GroupSearch';

const MasterGroupRoute = [
  {
    path: '/menu/master/group',
    exact: true,
    component: MasterGroup
  },
  {
    path: '/menu/master/group/create',
    exact: true,
    component: MasterGroupCreate
  },
  {
    path: '/menu/master/group/update/:id',
    exact: true,
    component: MasterGroupUpdate
  },
  {
    path: '/menu/master/group/search',
    exact: true,
    component: MasterGroupSearch
  },
  {
    path: '/menu/master/group/search/id/:id',
    exact: true,
    component: MasterGroup
  },
  {
    path: '/menu/master/group/search/name/:name',
    exact: true,
    component: MasterGroup
  },
  {
    path: '/menu/master/group/search/description/:description',
    exact: true,
    component: MasterGroup
  },
  {
    path: '/menu/master/group/search/id/:id/name/:name',
    exact: true,
    component: MasterGroup
  },
  {
    path: '/menu/master/group/search/id/:id/description/:description',
    exact: true,
    component: MasterGroup
  },
  {
    path: '/menu/master/group/search/name/:name/description/:description',
    exact: true,
    component: MasterGroup
  },
  {
    path:
      '/menu/master/group/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterGroup
  }
];

export default MasterGroupRoute;
