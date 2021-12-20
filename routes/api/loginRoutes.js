const router = require("express").Router();
const { User, Books } = require("../../models");
require("dotenv").config();
const transporter = require("./nodemailer");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// Login on /api/login/
router.get("/", async (req, res) => {});

// Create users on /api/login/signup
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log(newUser);
    res.status(200).send("you are signed up");
  } catch (err) {
    console.log(err);
  }
});

// Logout route /api/login/logout
router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end;
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
