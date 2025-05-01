import mongoose, { Schema, Document } from 'mongoose';
import { Genre } from '../types/genre';

interface Episode {
  episodeNumber: number;
  seasonNumber: number;
  releaseDate: Date;
  director: string;
  actors: string[];
}

export interface TVShow extends Document {
  id: string;
  title: string;
  description: string;
  genres: Genre[];
  episodes: Episode[];
}

const EpisodeSchema = new Schema<Episode>({
  episodeNumber: { type: Number, required: true },
  seasonNumber: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  actors: [{ type: String }]
}, { _id: false });

const TVShowSchema = new Schema<TVShow>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: [{ type: String, enum: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'SciFi'] }],
  episodes: [EpisodeSchema]
});

const TVShowModel = mongoose.model<TVShow>('TVShow', TVShowSchema);

export default TVShowModel;
