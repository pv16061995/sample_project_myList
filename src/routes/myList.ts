import { Router } from 'express';
import * as myListController from '../controllers/myList';

const router = Router();

// user auth middleware (replace with real auth)
router.use((req, res, next) => {
  req.user = { id: 'test-user-id' }; // mock user
  next();
});

router.post('/', myListController.addToList);
router.delete('/:contentId', myListController.removeFromList);
router.get('/', myListController.getList);

export default router;
