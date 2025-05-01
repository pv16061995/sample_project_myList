import mongoose, { Schema, Document } from 'mongoose';
import { Genre } from '../types/genre';

interface WatchHistory {
  contentId: string;
  watchedOn: Date;
  rating?: number;
}

export interface User extends Document {
  id: string;
  username: string;
  preferences: {
    favoriteGenres: Genre[];
    dislikedGenres: Genre[];
  };
  watchHistory: WatchHistory[];
}

const WatchHistorySchema = new Schema<WatchHistory>({
  contentId: { type: String, required: true },
  watchedOn: { type: Date, required: true },
  rating: { type: Number }
}, { _id: false });

const UserSchema = new Schema<User>({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }],
    dislikedGenres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }]
  },
  watchHistory: [WatchHistorySchema]
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
