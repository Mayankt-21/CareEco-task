const express = require("express");
const router = express.Router();

// Define your routes
router.get("/", (req, res) => {
  res.send("Order route");
});

module.exports = router;
