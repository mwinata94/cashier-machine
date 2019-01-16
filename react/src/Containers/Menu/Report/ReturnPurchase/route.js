import Report from './Report';
import Search from './Search';

const ReportReturnPurchaseRoute = [
  {
    path: '/menu/report/return purchase',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/return purchase/starting date/:startingDate/ending date/:endingDate/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/return purchase/starting date/:startingDate/ending date/:endingDate/supplier/:supplier/item/:item/selection/:selection',
    exact: true,
    component: Report
  }
];

export default ReportReturnPurchaseRoute;
