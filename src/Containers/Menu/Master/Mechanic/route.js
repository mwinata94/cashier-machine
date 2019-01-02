import MasterMechanic from './Mechanic';
import MasterMechanicCreate from './MechanicCreate';
import MasterMechanicEdit from './MechanicEdit';
import MasterMechanicSearch from './MechanicSearch';
import MasterMechanicSearchResult from './MechanicSearchResult';

const MasterMechanicRoute = [
  {
    path: '/menu/master/mechanic',
    exact: true,
    component: MasterMechanic
  },
  {
    path: '/menu/master/mechanic/create',
    exact: true,
    component: MasterMechanicCreate
  },
  {
    path: '/menu/master/mechanic/edit/id/:id/name/:name',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/starting date/:startingDate',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/ending date/:endingDate',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path:
      '/menu/master/mechanic/edit/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicEdit
  },
  {
    path: '/menu/master/mechanic/search',
    exact: true,
    component: MasterMechanicSearch
  },
  {
    path: '/menu/master/mechanic/search/id/:id',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/name/:name',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/starting date/:startingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/ending date/endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/id/:id/name/:name',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/id/:id/starting date/:startingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/id/:id/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/id/:id/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/name/:name/starting date/:startingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/name/:name/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/name/:name/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/name/:name/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/id/:id/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/name/:name/starting date/:startingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/name/:name/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path: '/menu/master/mechanic/search/name/:name/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/name/:name/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/name/:name/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/name/:name/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/starting date/:startingDate/ending date/:endingDate',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/starting date/:startingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/starting date/:startingDate/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  },
  {
    path:
      '/menu/master/mechanic/search/ending date/:endingDate/description/:description',
    exact: true,
    component: MasterMechanicSearchResult
  }
];

export default MasterMechanicRoute;
