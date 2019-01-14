import Report from './Report';
import Search from './Search';

const ReportSupplierRoute = [
  {
    path: '/menu/report/supplier',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/supplier/starting date/:startingDate/ending date/:endingDate/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/supplier/starting date/:startingDate/ending date/:endingDate/supplier/:supplier/item/:item/selection/:selection',
    exact: true,
    component: Report
  }
];

export default ReportSupplierRoute;
