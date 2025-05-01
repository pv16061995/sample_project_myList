import request from 'supertest';
import app from '../index';
import mongoose from 'mongoose';
import MyListModel from '../models/myList';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || '';


beforeAll(async () => {
  await mongoose.connect(MONGO_URI)
  await MyListModel.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('My List Feature', () => {
  it('should add an item to the list', async () => {
    const res = await request(app)
      .post('/api/my-list')
      .send({ contentId: 'item1', contentType: 'Movie' });

    expect(res.status).toBe(200);
    expect(res.body.items.some((item: any) => item.contentId === 'item1')).toBe(true);
  });

  it('should list items', async () => {
    const res = await request(app).get('/api/my-list?page=1&limit=10');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
  });

  it('should remove an item from the list', async () => {
    const res = await request(app).delete('/api/my-list/item1');
    expect(res.status).toBe(200);
    expect(res.body.items.some((item: any) => item.contentId === 'item1')).toBe(false);
  });
});
