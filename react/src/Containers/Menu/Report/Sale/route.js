import Report from './Report';
import Search from './Search';

const ReportSaleRoute = [
  {
    path: '/menu/report/sale',
    exact: true,
    component: Search
  },
  {
    path:
      '/menu/report/sale/starting date/:startingDate/ending date/:endingDate/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/sale/starting date/:startingDate/ending date/:endingDate/customer/:customer/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/sale/starting date/:startingDate/ending date/:endingDate/retail sale/:retailSale/item/:item/selection/:selection',
    exact: true,
    component: Report
  },
  {
    path:
      '/menu/report/sale/starting date/:startingDate/ending date/:endingDate/customer/:customer/retail sale/:retailSale/item/:item/selection/:selection',
    exact: true,
    component: Report
  }
];

export default ReportSaleRoute;
