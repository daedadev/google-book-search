const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const getRoutes = require("./getRoutes");
const authRoutes = require("./authRoutes");

router.use("/login", loginRoutes);
router.use("/get", getRoutes);
router.use("/auth", authRoutes);

module.exports = router;
