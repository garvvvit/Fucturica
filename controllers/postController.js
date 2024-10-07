const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const post = new Post({
    content,
    user: req.user.id
  });

  await post.save();
  res.status(201).json(post);
};

exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  
  if (!post.likes.includes(req.user.id)) {
    post.likes.push(req.user.id);
    await post.save();
    res.status(200).json({ msg: "Post liked" });
  } else {
    res.status(400).json({ msg: "Already liked" });
  }
};
