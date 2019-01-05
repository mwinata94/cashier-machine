import MasterType from './Type';
import MasterTypeCreate from './TypeCreate';
import MasterTypeUpdate from './TypeUpdate';
import MasterTypeSearch from './TypeSearch';

const MasterTypeRoute = [
  {
    path: '/menu/master/type',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/create',
    exact: true,
    component: MasterTypeCreate
  },
  {
    path: '/menu/master/type/update/:id',
    exact: true,
    component: MasterTypeUpdate
  },
  {
    path: '/menu/master/type/search',
    exact: true,
    component: MasterTypeSearch
  },
  {
    path: '/menu/master/type/search/id/:id',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/search/name/:name',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/search/description/:description',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/search/id/:id/name/:name',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/search/id/:id/description/:description',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/search/name/:name/description/:description',
    exact: true,
    component: MasterType
  },
  {
    path: '/menu/master/type/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterType
  }
];

export default MasterTypeRoute;
