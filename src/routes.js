import Error404Route from './Containers/Error/404/route';
import MainRoute from './Containers/Main/route';
import MenuRoute from './Containers/Menu/route';
import MenuMasterGroup from './Containers/Menu/Master/Group/route';
import MenuMasterInventory from './Containers/Menu/Master/Inventory/route';
import MenuMasterLocation from './Containers/Menu/Master/Location/route';
import MenuMasterMechanic from './Containers/Menu/Master/Mechanic/route';
import MenuMasterType from './Containers/Menu/Master/Type/route';
import MenuMasterRetailSale from './Containers/Menu/Master/RetailSale/route';
import MenuMasterSupplier from './Containers/Menu/Master/Supplier/route';
import MenuReportAdjust from './Containers/Menu/Report/Adjust/route';
import MenuReportInventory from './Containers/Menu/Report/Inventory/route';
import MenuReportPurchase from './Containers/Menu/Report/Purchase/route';
import MenuReportSale from './Containers/Menu/Report/Sale/route';
import MenuTransactionAdjust from './Containers/Menu/Transaction/Adjust/route';
import MenuTransactionPurchase from './Containers/Menu/Transaction/Purchase/route';
import MenuTransactionSale from './Containers/Menu/Transaction/Sale/route';
import MenuWishList from './Containers/Menu/WishList/route';

const routes = [
  ...Error404Route,
  ...MainRoute,
  ...MenuRoute,
  ...MenuMasterGroup,
  ...MenuMasterInventory,
  ...MenuMasterLocation,
  ...MenuMasterMechanic,
  ...MenuMasterType,
  ...MenuMasterRetailSale,
  ...MenuMasterSupplier,
  ...MenuReportAdjust,
  ...MenuReportInventory,
  ...MenuReportPurchase,
  ...MenuReportSale,
  ...MenuTransactionAdjust,
  ...MenuTransactionPurchase,
  ...MenuTransactionSale,
  ...MenuWishList
];

export default routes;
