import Report from './Report';
import Search from './Search';

const ReportPurchaseRoute = [
  {
    path: '/menu/report/purchase',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/purchase/starting date/:startingDate/ending date/:endingDate/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/purchase/starting date/:startingDate/ending date/:endingDate/supplier/:supplier/item/:item/selection/:selection',
    exact: true,
    component: Report
  }
];

export default ReportPurchaseRoute;
