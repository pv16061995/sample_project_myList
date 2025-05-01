import mongoose from 'mongoose';

const MyListItemSchema = new mongoose.Schema(
  {
    contentId: { type: String, required: true },
    contentType: { type: String, enum: ['Movie', 'TVShow'], required: true },
    addedAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const MyListSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  items: [MyListItemSchema]
});

const MyListModel = mongoose.model('MyList', MyListSchema);

export default MyListModel;
