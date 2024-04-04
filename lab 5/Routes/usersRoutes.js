const express = require("express");
const router = new express.Router();

const usersController = require("../Controllers/usersController");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserByID);
router.post("/", usersController.addNewUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
