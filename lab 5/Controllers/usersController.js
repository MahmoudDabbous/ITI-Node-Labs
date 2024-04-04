const usersModel = require("../Models/usersModel");

const getAllUsers = async (req, res) => {
  try {
    let allUsers = await usersModel.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByID = async (req, res) => {
  try {
    let user = await usersModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewUser = async (req, res) => {
  try {
    const newuser = new usersModel(req.body);
    await newuser.save();
    res.json(newuser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await usersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers, getUserByID, addNewUser, deleteUser };
