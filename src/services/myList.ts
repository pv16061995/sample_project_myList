import MyListModel from '../models/myList';

export const addToList = async (userId: string, contentId: string, contentType: 'Movie' | 'TVShow') => {
  const list = await MyListModel.findOneAndUpdate(
    { userId },
    {
      $addToSet: {
        items: { contentId, contentType, addedAt: new Date() }
      }
    },
    { upsert: true, new: true }
  );
  return list;
};

export const removeFromList = async (userId: string, contentId: string) => {
  const list = await MyListModel.findOneAndUpdate(
    { userId },
    { $pull: { items: { contentId } } },
    { new: true }
  );
  return list;
};

export const getList = async (userId: string, page: number, limit: number) => {
  const list = await MyListModel.findOne({ userId });
  if (!list) return [];

  const sorted = list.items
    .sort((a, b) => b.addedAt.getTime() - a.addedAt.getTime());

  return sorted.slice((page - 1) * limit, page * limit);
};
