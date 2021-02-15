const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    avatar: String,
    email: String,
    desc: String,
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: "User",
      }],
    favoritedBy: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    publicId: String,
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = model("User", userSchema);
