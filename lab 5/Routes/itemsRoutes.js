const express = require("express");
const router = new express.Router();

const itemsController = require("../Controllers/itemsController");

router.get("/", itemsController.getAllItems);
router.get("/:id", itemsController.getItemsByID);
router.post("/", itemsController.addNewItem);
router.delete("/:id", itemsController.deleteItem);

module.exports = router;
