const router = require("express").Router();
const bookRoutes = require("./bookRoutes");

router.use("/book", bookRoutes);

module.exports = router;
