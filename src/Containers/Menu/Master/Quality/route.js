import MasterQuality from './Quality';
import MasterQualityCreate from './QualityCreate';
import MasterQualityEdit from './QualityEdit';
import MasterQualitySearch from './QualitySearch';
import MasterQualitySearchResult from './QualitySearchResult';

const MasterQualityRoute = [
  {
    path: '/menu/master/quality',
    exact: true,
    component: MasterQuality
  },
  {
    path: '/menu/master/quality/create',
    exact: true,
    component: MasterQualityCreate
  },
  {
    path: '/menu/master/quality/edit/id/:id/name/:name',
    exact: true,
    component: MasterQualityEdit
  },
  {
    path:
      '/menu/master/quality/edit/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterQualityEdit
  },
  {
    path: '/menu/master/quality/search',
    exact: true,
    component: MasterQualitySearch
  },
  {
    path: '/menu/master/quality/search/id/:id',
    exact: true,
    component: MasterQualitySearchResult
  },
  {
    path: '/menu/master/quality/search/name/:name',
    exact: true,
    component: MasterQualitySearchResult
  },
  {
    path: '/menu/master/quality/search/description/:description',
    exact: true,
    component: MasterQualitySearchResult
  },
  {
    path: '/menu/master/quality/search/id/:id/name/:name',
    exact: true,
    component: MasterQualitySearchResult
  },
  {
    path: '/menu/master/quality/search/id/:id/description/:description',
    exact: true,
    component: MasterQualitySearchResult
  },
  {
    path: '/menu/master/quality/search/name/:name/description/:description',
    exact: true,
    component: MasterQualitySearchResult
  },
  {
    path:
      '/menu/master/quality/search/id/:id/name/:name/description/:description',
    exact: true,
    component: MasterQualitySearchResult
  }
];

export default MasterQualityRoute;
