const express = require("express");
const User = require("../models/User");
const Pet = require("../models/Pet");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const { uploader, cloudinary } = require("../configs/cloudinary");
const { populate } = require("../models/User");

router.post('/:userId/register-pets', (req, res) => {
  const owner = req.params.userId;
  console.log(req.body)
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj)
  const petsname = obj.petsname;
  const breed = obj.breed;
  const petsimage = obj.imageUrl;
  const publicId = obj.publicId;
  Pet.create({
    petsname,
    breed,
    petsimage,
    publicId,
    owner
  })
  .then((dbPet) => {
    console.log(dbPet)
    User.findByIdAndUpdate(owner, {
      $push: { pets: dbPet.id },
    }).then((dbUser) => {
      console.log(dbUser)
      res.status(201).json(dbUser)
    })
  })
  .catch((err) => {
    res.json(err)
  });
})

// router.get('/getLatest', async(req, res) => {
//   const getImage = await Image.findOne(). sort({_id: -1})
//   res.json(getImage.imageUrl);
// })

// router.post("/:userId/register-pets",
//   uploader.single("petsimage"),
//   (req, res) => {
//     const { petsname, breed } = req.body;
//     const owner = req.params.userId;
//     const petsimage = req.file.path;
//     const publicId = req.file.filename;
//     console.log(req.file);
//     Pet.create({
//       petsname,
//       breed,
//       petsimage,
//       owner: owner,
//       publicId,
//     })
//       .then((dbPet) => {
//         User.findByIdAndUpdate(owner, {
//           $push: { pets: dbPet._id },
//         });
//       })
//       .then((dbUser) => res.status(201).json(dbUser))
//       .catch((err) => {
//         res.json(err)
//       });
//   }
// );

router.get("/:userId/mypets", (req, res) => {
  const ownerId = req.params.userId;
  Pet.find({ owner: ownerId })
    .populate("owner")
    .then((myPets) => {
      res.status(201).json(myPets)
    })
    .catch((err) => next(err));
});

router.get("/random", (req, res) => {
  Pet.aggregate([{ $sample: { size: 1 } }])
    .then((randomPet) => {
      res.status(201).json(randomPet)
    })
    .catch((err) => next(err));
});

// router.get("/pets/:petsId", ensureAuthenticated, (req, res, next) => {
//   const petsId = req.params.petsId;
//   Pet.findById(petsId)
//     .populate("owner")
//     .then((pet) => {
//       res.render();
//     });
// });

// router.get("/pets/:id/edit", ensureAuthenticated, (req, res, next) => {
//   Pet.findById(req.params.id)
//     .then((pet) => {
//       console.log(pet);
//       res.render("pets/edit", { pet });
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.post(
//   "/pets/:id/edit",
//   ensureAuthenticated,
//   uploader.single("petsimage"),
//   (req, res, next) => {
//     const { petsname, breed } = req.body;
//     const { id } = req.params;
//     let petsimage;
//     if (req.file) {
//       petsimage = req.file.path;
//     } else {
//       petsimage = req.body.existingImage;
//     }
//     Pet.findByIdAndUpdate(
//       id,
//       {
//         petsname,
//         breed,
//         petsimage,
//         owner: req.user._id,
//       },
//       { new: true }
//     )
//       .then(() => {
//         res.redirect("/pets");
//       })
//       .catch((err) => {
//         next(err);
//       });
//   }
// );

// router.get("/pets/:id/edit", (req, res, next) => {
//   Pet.findById(req.params.id)
//     .then((pet) => {
//       console.log(pet);
//       res.render("pets/edit", { pet });
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.post(
//   "/pets/:id/edit",
//   ensureAuthenticated,
//   uploader.single("petsimage"),
//   (req, res, next) => {
//     const { petsname, breed } = req.body;
//     const { id } = req.params;
//     let petsimage;
//     if (req.file) {
//       petsimage = req.file.path;
//     } else {
//       petsimage = req.body.existingImage;
//     }
//     Pet.findByIdAndUpdate(
//       id,
//       {
//         petsname,
//         breed,
//         petsimage,
//         owner: req.user._id,
//       },
//       { new: true }
//     )
//       .then(() => {
//         res.redirect("/pets");
//       })
//       .catch((err) => {
//         next(err);
//       });
//   }
// );

// router.post("/pets/:id/delete", ensureAuthenticated, (req, res, next) => {
//   Pet.findByIdAndDelete(req.params.id)
//     .then((pet) => {
//       console.log(pet);
//       if (pet.petsimage) {
//         cloudinary.uploader.destroy(pet.publicId);
//       }
//       res.redirect("/pets");
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.get("/pets/like", (req, res, next) => {
//   res.redirect("/pets/like", 
//   { message: req.flash("You liked this pet 💛") });
// });

// router.post("/pets/like", ensureAuthenticated, (req, res, next) => {
//   const likedPersonId = req.body.id;
//   const loggedInUserId = req.user._id;

//   User.findByIdAndUpdate(loggedInUserId, {
//     $push: { likedPeople: likedPersonId },
//   })
//     .then((loggedInUserfromDB) => {
//       User.findById(likedPersonId).then((likedPersonfromDB) => {
//         if (likedPersonfromDB.likedPeople.includes(loggedInUserId)) {
//           res.render("match/matchPage", { likedPersonfromDB, loggedInUserId });
//         } else {
//           res.redirect("/allPets");
//         }
//       });
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.get("/movie/delete/:id", (req, res, next) => {
//   Movie.findByIdAndDelete(req.params.id)
//     .then((movie) => {
//       if (movie.imgPath) {
//         cloudinary.uploader.destroy(movie.publicId);
//       }
//       res.redirect("/");
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;
