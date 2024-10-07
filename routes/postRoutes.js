const express = require('express');
const { createPost, likePost } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createPost);
router.post('/like/:id', authMiddleware, likePost);

module.exports = router;
