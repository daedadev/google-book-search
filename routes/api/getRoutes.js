const router = require("express").Router();
const { User, Books } = require("../../models");
const cors = require("cors");

// Routes all defined on /api/get
router.get("/", cors(), async (req, res) => {});

// Routes all defined on /api/get/stored
router.get("/stored", async (req, res) => {});

module.exports = router;
