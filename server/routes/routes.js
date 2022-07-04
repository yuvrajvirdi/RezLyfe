import express from 'express';

import { getPosts, getPostBySearch ,getPost, createPost, updatePost, likePost, deletePost } from '../controllers/controllers';

const router = express.Router();

router.get('/search', getPostBySearch);
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);

export default router;