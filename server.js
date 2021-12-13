const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const routes = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", (error) => {
  console.log("Database Error:", error);
});

app.use(routes);

// Listen on port 3000
app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
