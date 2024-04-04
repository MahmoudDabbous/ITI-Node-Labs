const ordersModel = require("../Models/ordersModel");

const getAllOrders = async (req, res) => {
  try {
    let allOrders = await ordersModel.find();
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderByID = async (req, res) => {
  try {
    let order = await ordersModel.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewOrder = async (req, res) => {
  try {
    const neworder = new ordersModel(req.body);
    await neworder.save();
    res.json(neworder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await ordersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Order Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllOrders, getOrderByID, addNewOrder, deleteOrder };
