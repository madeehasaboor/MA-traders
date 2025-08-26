const express = require("express");
const { createOrder, getOrders, getUserOrders } = require("../controllers/ordercontroller");

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);
router.get("/:userId", getUserOrders);

module.exports = router;
