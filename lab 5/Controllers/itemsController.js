const itemsModel = require("../Models/itemsModel");

const getAllItems = async (req, res) => {
  try {
    let allItems = await itemsModel.find();
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemsByID = async (req, res) => {
  try {
    let items = await itemsModel.findById(req.params.id);
    if (!items) {
      return res.status(404).json({ message: "Items not found" });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewItem = async (req, res) => {
  try {
    const newItem = new itemsModel(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await itemsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Item Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllItems, getItemsByID, addNewItem, deleteItem };
