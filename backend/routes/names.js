var express = require("express");
var router = express.Router();
var axios = require("axios");
router.post("/predict", function (req, res, next) {
  axios
    .get(`https://api.agify.io?name=${req.body.name}`)
    .then((r) => {
      res.status(200).json({ message: "it works!", data: r.data }).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: "it failed!" }).end();
    });
});
module.exports = router;
