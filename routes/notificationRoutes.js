const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all notifications for logged-in user
router.get('/', authMiddleware, getNotifications);

// Mark notification as read
router.put('/:id/read', authMiddleware, markAsRead);

module.exports = router;
