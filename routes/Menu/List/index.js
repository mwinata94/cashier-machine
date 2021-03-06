const router = require('express').Router();
const GroupRoute = require('./Group');
const InventoryRoute = require('./Inventory');
const LocationRoute = require('./Location');
const SupplierRoute = require('./Supplier');
const TypeRoute = require('./Type');
router.use(GroupRoute);
router.use(InventoryRoute);
router.use(LocationRoute);
router.use(SupplierRoute);
router.use(TypeRoute);
module.exports = router;