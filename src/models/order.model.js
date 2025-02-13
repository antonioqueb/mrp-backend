const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "in_progress", "completed"),
    defaultValue: "pending",
  },
}, {
  timestamps: true,
});

module.exports = Order;
