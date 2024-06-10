const router = require("express").Router();
const Album = require("../models/Album");

//create album folder
router.post("/", async (req, res) => {
  const newAlbum = new Album(req.body);
  try {
    const fs = require("fs");
    const path = "./images/album/" + req.body.album;

    fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, { recursive: true }, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("New Directory created successfully !!");
          }
        });
      } else {
        console.log("Given Directory already exists !!");
      }
    });
    const savedAlbum = await newAlbum.save();
    res.status(200).json(savedAlbum);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all album list
router.get("/", async (req, res) => {
  const album = req.query.event;
  try {
    let photos;
    if (album) {
      photos = await Album.find({ album });
    } else {
      photos = await Album.find();
    }
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update album photo list
router.put("/update/:id", async (req, res) => {
  const Id = req.params.id;
  const photos = await Album.findById(req.params.id);
  for (var i = 0; i < req.body.photo.length; i++) {
    photos.photos.push(req.body.photo[i]);
  }
  try {
    const updatePhotos = await Album.findByIdAndUpdate(
      req.params.id,
      {
        $set: photos,
      },
      { new: true }
    );
    res.status(200).json(updatePhotos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
