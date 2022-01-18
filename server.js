const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  key: "userId",
  secret: "Super secret secret",
  cookie: {
    expires: 60 * 60 * 24,
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Define middleware here
app.use(cors());
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function (req, res) {
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
