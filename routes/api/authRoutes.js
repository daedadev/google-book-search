const router = require("express").Router();
const { User, Book } = require("../../models");
const cors = require("cors");

// Routes all defined on /api/auth/checktoken
router.post("/checktoken", cors(), async (req, res) => {});

// Routes all defined on /api/auth/newpass
router.post("/newpass", async (req, res) => {});

module.exports = router;
