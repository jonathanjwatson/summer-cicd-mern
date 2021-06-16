const router = require("express").Router();
const restaurantRoutes = require("./restaurantRoutes");

router.use("/restaurants", restaurantRoutes);

module.exports = router;
