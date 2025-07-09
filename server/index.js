import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import githubRoutes from "./routes/github.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/github", githubRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});