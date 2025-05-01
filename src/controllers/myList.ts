import { Request, Response } from 'express';
import * as myListService from '../services/myList';

export const addToList = async (req: Request, res: Response) => {
  try {
    const userId: string = req.user?.id || ""; // Assume middleware adds `user` to req
    const { contentId, contentType } = req.body;

    const updatedList = await myListService.addToList(userId, contentId, contentType);
    res.status(200).json(updatedList);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const removeFromList = async (req: Request, res: Response) => {
  try {
    const userId: string = req.user?.id || "";
    const { contentId } = req.params;

    const updatedList = await myListService.removeFromList(userId, contentId);
    res.status(200).json(updatedList);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const userId: string = req.user?.id || "";
    const page: number = Number(req.query.page) || 1;
    const limit: number = Number(req.query.limit) || 10;

    const items = await myListService.getList(userId, page, limit);
    res.status(200).json({ items });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
