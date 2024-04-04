const express = require("express");
const router = new express.Router();

const ordersController = require("../Controllers/ordersController");

router.get("/", ordersController.getAllOrders);
router.get("/:id", ordersController.getOrderByID);
router.post("/", ordersController.addNewOrder);
router.delete("/:id", ordersController.deleteOrder);

module.exports = router;
