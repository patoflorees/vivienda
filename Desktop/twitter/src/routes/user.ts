import express from 'express';
import UserHttpHandler from '../handlers/user'

const router  = express.Router();

const userHttpHandler = new UserHttpHandler();

router.get('/', userHttpHandler.getUsers);
router.get('/:id', userHttpHandler.getUserById);
router.put('/:id', userHttpHandler.updateUser);
router.delete('/:id', userHttpHandler.deleteUser);

export default router;