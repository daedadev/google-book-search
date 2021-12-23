const router = require("express").Router();
const { User, Book } = require("../../models");
const cors = require("cors");

// General CRUD routes

// Routes all defined on /api/book/
router.get("/", cors(), async (req, res) => {});

// Routes all defined on /api/book/
router.post("/", cors(), async (req, res) => {});

// Routes all defined on /api/book/delete
router.get("/delete", cors(), async (req, res) => {});

module.exports = router;
