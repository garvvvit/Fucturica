const Notification = require('../models/Notification');


exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification || notification.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Notification not found' });
    }

    notification.isRead = true;
    await notification.save();

    res.status(200).json(notification);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
