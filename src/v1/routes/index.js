
const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2> API V1</h2>`);
});

module.exports = router;