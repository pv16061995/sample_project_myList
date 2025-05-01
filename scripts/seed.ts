import mongoose from 'mongoose';
import MovieModel from '../src/models/movie';
import TVShowModel from '../src/models/tvshow';
import UserModel from '../src/models/user';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';

console.log(MONGO_URI)
async function seedData() {
  await mongoose.connect(MONGO_URI);

  await MovieModel.deleteMany({});
  await TVShowModel.deleteMany({});
  await UserModel.deleteMany({});

  const movies = [
    {
      id: 'movie1',
      title: 'The Great Adventure',
      description: 'An epic journey',
      genres: ['Action'],
      releaseDate: new Date('2025-01-01'),
      director: 'Jane Doe',
      actors: ['Actor A', 'Actor B']
    }
  ];

  const tvShows = [
    {
      id: 'tv1',
      title: 'Mystery',
      description: 'A mysterious',
      genres: ['Drama'],
      episodes: [
        {
          episodeNumber: 1,
          seasonNumber: 1,
          releaseDate: new Date('2025-05-01'),
          director: 'John',
          actors: ['Actor C', 'Actor D']
        }
      ]
    }
  ];

  const users = [
    {
      id: 'test-user-id',
      username: 'testuser',
      preferences: {
        favoriteGenres: ['Action'],
        dislikedGenres: ['Romance']
      },
      watchHistory: []
    }
  ];

  await MovieModel.insertMany(movies);
  await TVShowModel.insertMany(tvShows);
  await UserModel.insertMany(users);

  console.log('Seeded successfully');
  await mongoose.disconnect();
}

seedData().catch(console.error);
