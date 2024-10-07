const Notification = require('../models/Notification');

exports.createNotification = async (userId, message) => {
  const notification = new Notification({
    user: userId,
    message
  });
  await notification.save();
};
