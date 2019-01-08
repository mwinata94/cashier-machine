import Report from './Report';
import Search from './Search';

const ReportAdjustRoute = [
  {
    path: '/menu/report/adjust',
    exact: true,
    component: Search
  },
  {
    path: '/menu/report/adjust/:startDate/:endDate',
    exact: true,
    component: Report
  }
];

export default ReportAdjustRoute;
