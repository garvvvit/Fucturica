const User = require('../models/User');

exports.followUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user.id);
  const userToFollow = await User.findById(id);

  if (!userToFollow || user.following.includes(id)) {
    return res.status(400).json({ msg: "Cannot follow this user" });
  }

  user.following.push(id);
  userToFollow.followers.push(req.user.id);

  await user.save();
  await userToFollow.save();

  res.status(200).json({ msg: "Following user" });
};
