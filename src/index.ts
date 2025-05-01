import express from 'express';
import mongoose from 'mongoose';
import myListRoutes from './routes/myList';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';
const app = express();

app.use(express.json());
app.use('/api/my-list', myListRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('MongoDB connection error:', err));

export default app; // needed for testing



