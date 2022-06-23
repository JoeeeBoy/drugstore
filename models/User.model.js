const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  wallet: {
    type: Number,
    default: 0,
  },
  recipe: [{
    type: mongoose.SchemaTypes.ObjectId
  }],
  shopCard: [
    {
      ref: "Drug",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
  sum: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
