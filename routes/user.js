const express = require("express");
const User = require("../models/User");
const Pet = require("../models/Pet");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

router.get("/:userId/profile", (req, res) => {
  const id = req.params.userId;
  User.findById(id)
    .populate("pets")
    .then((dbUser) => {
      res.status(201).json(dbUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/:userId/edit", ensureAuthenticated, (req, res, next) => {
//   User.findById(req.session.passport.user)
//     .then((user) => {
//       res.render("users/editProfile", { user: user });
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.post('/:userId/edit', (req, res) => {
  const id = req.params.userId;
  console.log(req.body)
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj)
  const username = obj.username;
  const desc = obj.desc;
  const avatar = obj.imageUrl;
  const publicId = obj.publicId;

  User.findByIdAndUpdate(id,
    { username: username,
      avatar: avatar,
      desc: desc,
      publicId: publicId
    }
  ).then((dbUser) => {
    console.log(dbUser)
    res.status(201).json(dbUser)
  })
})

module.exports = router;
