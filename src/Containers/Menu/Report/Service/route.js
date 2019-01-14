import Report from './Report';
import Search from './Search';

const ReportServiceRoute = [
  {
    path: '/menu/report/service',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/service/starting date/:startingDate/ending date/:endingDate/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/service/starting date/:startingDate/ending date/:endingDate/mechanic/:mechanic/item/:item/selection/:selection',
    exact: true,
    component: Report
  }
];

export default ReportServiceRoute;
