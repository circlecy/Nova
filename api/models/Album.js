const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    album: {
      type: String,
      required: true,
    },
    photos: {
      type : Array , "default": [],
      required: true,
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", AlbumSchema);