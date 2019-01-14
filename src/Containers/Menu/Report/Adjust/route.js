import Report from './Report';
import Search from './Search';

const ReportAdjustRoute = [
  {
    path: '/menu/report/adjust',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/adjust/starting date/:startingDate/ending date/:endingDate/item/:item/selection/:selection',
    exact: true,
    component: Report
  }
];

export default ReportAdjustRoute;
