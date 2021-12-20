const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authors: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    image: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    link: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    modelName: "book",
  }
);

module.exports = Book;
