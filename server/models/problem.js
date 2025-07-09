import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: String,
  url: String,
  platform: String, // GitHub, Reddit, HN
  description: String,
  createdAt: Date,
  keywordsMatched: [String],
});

export default mongoose.model("Problem", problemSchema);
// This schema defines the structure of a problem document in MongoDB.