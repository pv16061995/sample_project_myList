import mongoose, { Schema, Document } from 'mongoose';
import { Genre } from '../types/genre';

export interface Movie extends Document {
  id: string;
  title: string;
  description: string;
  genres: Genre[];
  releaseDate: Date;
  director: string;
  actors: string[];
}

const MovieSchema = new Schema<Movie>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }],
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  actors: [{ type: String }]
});

const MovieModel = mongoose.model<Movie>('Movie', MovieSchema);

export default MovieModel;
