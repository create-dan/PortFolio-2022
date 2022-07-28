const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userMessageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


// const messageData  = mongoose.model('Message', userMessageSchema);
// module.exports = messageData;

module.exports = mongoose.model("Message", userMessageSchema);
