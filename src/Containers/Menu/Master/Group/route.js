import MasterGroup from './Group';
import MasterGroupCreate from './GroupCreate';
import MasterGroupEdit from './GroupEdit';
import MasterGroupSearch from './GroupSearch';
import MasterGroupSearchResult from './GroupSearchResult';

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
    path: '/menu/master/group/edit/id/:id/name/:name',
    exact: true,
    component: MasterGroupEdit
  },
  {
    path: '/menu/master/group/search',
    exact: true,
    component: MasterGroupSearch
  },
  {
    path: '/menu/master/group/search/id/:id',
    exact: true,
    component: MasterGroupSearchResult
  },
  {
    path: '/menu/master/group/search/name/:name',
    exact: true,
    component: MasterGroupSearchResult
  },
  {
    path: '/menu/master/group/search/id/:id/name/:name',
    exact: true,
    component: MasterGroupSearchResult
  }
];

export default MasterGroupRoute;
