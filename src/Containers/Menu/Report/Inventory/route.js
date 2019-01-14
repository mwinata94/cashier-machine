import Report from './Report';
import Search from './Search';

const ReportInventoryRoute = [
  {
    path: '/menu/report/inventory',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/inventory/starting date/:startingDate/ending date/:endingDate/item/:item',
    exact: true,
    component: Report
  }
];

export default ReportInventoryRoute;
