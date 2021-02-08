const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const petSchema = new Schema (
  {
    name: String,
    breed: String,
    image: {
      data: Buffer,
      contentType: String
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  }, 

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
)


module.exports = model('Pet', petSchema);

