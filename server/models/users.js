const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

   userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
  },
  userPhone: {
    type: String,
  },
  userProfilePicture: {
    type: String,
  },

});

module.exports = User = mongoose.model("user", userSchema);