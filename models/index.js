const Book = require("./book");
const User = require("./User");

User.hasMany(Book, {
  foreignKey: "user_id",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Book, User };
