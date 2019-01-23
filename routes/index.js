const router = require('express').Router();
const MainRoute = require('./Main');
const MenuRoute = require('./Menu');
const DefaultRoute = require('./Default');
router.use(MainRoute);
router.use(MenuRoute);
router.use(DefaultRoute);
module.exports = router;