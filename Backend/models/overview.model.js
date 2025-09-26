import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OverviewSchema = new Schema({
  headline:{
    type: String,
  },
  bio: {
    type: String,
  }
});

const Overview = model("Overview", OverviewSchema);
export default Overview;
