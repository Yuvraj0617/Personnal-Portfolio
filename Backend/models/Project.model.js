import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  projectImg: {
    type: String,
    required: true,
  },

  projectName: {
    type: String,
    required: true,
  },

  projectDescription: {
    type: String,
    required: true,
  },

  techStack: {
    type: String,
    required: true,
  },
  
  projectLink: {
    type: String
  }
});

const Project = model("Project", projectSchema);

export default Project;
