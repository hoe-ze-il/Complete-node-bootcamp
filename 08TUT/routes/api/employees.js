const express = require("express");
const router = express.Router();
const data = {};
data.empoyees = require("../../data/employees.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.empoyees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({
      id: req.body.id,
    });
  });

router.route("/:id").get((res, req) => {
  res.json({ id: req.params.id });
});

module.exports = router;
