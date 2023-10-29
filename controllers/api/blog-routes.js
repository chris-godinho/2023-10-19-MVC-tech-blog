const router = require('express').Router();
const { Blogpost, User, Comment } = require('../../models');

router.post('/post', async (req, res) => {
      try {
          const dbBlogpost = await Blogpost.create({
              title: req.body.title,
              contents: req.body.contents,
              date: Date.now(),
              user_id: req.session.user_id
          });
          res.status(200);
          res.redirect(`/post/${dbBlogpost.id}`);
          }
      catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  }
);

router.post('/comment', async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Post ID:', req.session.post_id);
      try {
          const dbComment = await Comment.create({
              text: req.body.text,
              timestamp: Date.now(),
              user_id: req.session.user_id,
              post_id: req.session.post_id,
          });
          console.log('Created Comment:', dbComment);
          res.status(200);
          res.redirect(`/post/${dbComment.post_id}`);
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  }
);

module.exports = router;