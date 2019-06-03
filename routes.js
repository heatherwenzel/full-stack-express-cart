"use strict";

const express = require("express");
const router = express.Router();
const cartItems = require("./cart-items");

router.get("/cart-items", (req, res) => {
  res.json(cartItems);
});

router.post("/cart-items", (req, res) => {
  // console.log(req.body);
  cartItems.push(req.body);
  res.json(cartItems);
});

router.put("/cart-items/:id", (req, res) => {
  // console.log(req.body, req.params.id);
  let index = cartItems.findIndex(item => item.id === req.params.id)
  cartItems.splice(index, 1, req.body);
  res.json(cartItems);
});

router.delete("/cart-items/:id", (req, res) => {
  // console.log(req.params.id);
  let index = cartItems.findIndex(item => item.id === req.params.id)
  cartItems.splice(index, 1);
  res.json(cartItems);
});

module.exports = router;
