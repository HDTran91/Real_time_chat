import mongoose from "mongoose"; 

let schema = mongoose.Schema;

let UserSchema = new Schema({
  username: String,
  gender: {type: String, default: "male"},
  phone: {type: Number, default: null},
  address: {type: String, default: null},
  avatar: {type: String, default: "avatar-default.jpg"},
  role: {type: String, default: "user"},
  local:{
    email: {type: String, trim: true}, // no space in email
    password: String,
    isActive: {type: Boolean, default: false},
    verifyToken: String
  },
  facebook: {
    uid: String,
    token: String,
    email:{type: String, trim: true}
  },
  google: {
    uid: String,
    token: String,
    email:{type: String, trim: true}
  },
  createAt: {type: Number, default: Date.now},
  updateAt: {type: Number, default: Date.now},
  deleteAt: {type: Number, default: Date.now}
});

module.exports = mongoose.model ("user",UserSchema);