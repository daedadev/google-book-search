const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

sequelize = new Sequelize(
  zcf8igfpwxk1c5u3,
  wsom8x86u6h38ldb,
  z6t7ch78r1lh3y0t,
  {
    host: "exbodcemtop76rnz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
