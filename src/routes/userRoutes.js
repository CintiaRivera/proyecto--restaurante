import express from 'express';
import {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/userController.js';
import { validateBody } from '../middlewares/validateBody.js';
import {put_userSchema, post_userSchema } from '../helpers/validationSchemas/userSchemas.js';

const router = express.Router();

router.get('/', getUsers);

router.post(
  '/',
  (req, res, next) => validateBody(req, res, next, post_userSchema),
  postUser
);

router.put('/:id',  (req, res, next) => validateBody(req, res, next, put_userSchema)
,putUser);

router.delete('/:id', deleteUser);

export default router;
