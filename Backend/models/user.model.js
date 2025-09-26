import mongoose from "mongoose";
const { Schema, model } = mongoose;

const Userschema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const User = model("User", Userschema);
export default User;