import mongoose from "mongoose";
const { Schema, model } = mongoose;

const EduSchema = new Schema({
  institution: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  }
});

const Education = model("Education", EduSchema);
export default Education;