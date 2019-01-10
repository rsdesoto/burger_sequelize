var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({
    // where: {
    //   devoured: false
    // }
  }).then(function(data) {
    // console.log(data);
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(data) {
    // console.log(data);
    res.redirect("/");
  });
});

// put route -> back to index
// router.put("/burgers/update/:id", function(req, res) {
//   burger.update(req.params.id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     // Send back response and let page reload from .then in Ajax
//     res.json("/");
//   });
// });

router.post("/burgers/update/:id", function(req, res) {
  console.log(req);
  db.Burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(data) {
    console.log(data);
    res.json("/");
  });

  // (req.params.id, function(result) {
  //   // wrapper for orm.js that using MySQL update callback will return a log to console,
  //   // render back to index with handle
  //   console.log(result);
  //   // Send back response and let page reload from .then in Ajax
  //   res.json("/");
  // });
});

module.exports = router;
