const Order = require("../models/order.model");

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};

const createOrder = async (req, res) => {
  const { product, status } = req.body;
  const newOrder = await Order.create({ product, status });
  res.status(201).json(newOrder);
};

module.exports = { getAllOrders, createOrder };
