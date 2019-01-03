import MasterType from './Type';
import MasterTypeCreate from './TypeCreate';
import MasterTypeEdit from './TypeEdit';
import MasterTypeSearch from './TypeSearch';
import MasterTypeSearchResult from './TypeSearchResult';

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
    path: '/menu/master/type/edit/id/:id/name/:name',
    exact: true,
    component: MasterTypeEdit
  },
  {
    path: '/menu/master/type/edit/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterTypeEdit
  },
  {
    path: '/menu/master/type/search',
    exact: true,
    component: MasterTypeSearch
  },
  {
    path: '/menu/master/type/search/id/:id',
    exact: true,
    component: MasterTypeSearchResult
  },
  {
    path: '/menu/master/type/search/name/:name',
    exact: true,
    component: MasterTypeSearchResult
  },
  {
    path: '/menu/master/type/search/description/:description',
    exact: true,
    component: MasterTypeSearchResult
  },
  {
    path: '/menu/master/type/search/id/:id/name/:name',
    exact: true,
    component: MasterTypeSearchResult
  },
  {
    path: '/menu/master/type/search/id/:id/description/:description',
    exact: true,
    component: MasterTypeSearchResult
  },
  {
    path: '/menu/master/type/search/name/:name/description/:description',
    exact: true,
    component: MasterTypeSearchResult
  },
  {
    path: '/menu/master/type/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterTypeSearchResult
  }
];

export default MasterTypeRoute;
