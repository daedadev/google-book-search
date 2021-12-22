const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const bookRoutes = require("./bookRoutes");
const authRoutes = require("./authRoutes");

router.use("/login", loginRoutes);
router.use("/book", bookRoutes);
router.use("/auth", authRoutes);

module.exports = router;
