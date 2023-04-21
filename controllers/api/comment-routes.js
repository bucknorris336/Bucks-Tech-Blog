//dependencies and models
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

//POST request for new comment
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//       userId: req.session.userId,
//     });
//     res.json(newComment);
//   } catch (err) {
//     res.status(500).json(err);
//   }

// });

//POST request for new comment
router.post(`/:post_id`, withAuth, async (req, res) => {
  const postId = req.params;
  const { commentEntry } = req.body;
  if (!commentEntry) {
    res.status(400).json({ message: "Comment body is required" });
    return;
  }
  //Create new comment in db
  try {
    const newComment = await Comment.create({
      post_id: postId.post_id,
      description: commentEntry,
      user_id: req.session.user_id,
    });
    //retrieve comment and user
    const comment = await Comment.findByPk(newComment.id, {
      include: [{ model: User }],
      raw: true,
      nest: true,
    });
    res.json(comment);
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

//export module
module.exports = router;
