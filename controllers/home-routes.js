const router = require('express').Router();
const { where } = require('sequelize');
const { Blogpost, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBlogpost = await Blogpost.findAll(
      {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      }
    );
    const blogposts = dbBlogpost.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render('home', {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/post/:id', async (req, res) => {
  try {
    const dbBlogpost = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'timestamp', 'user_id', 'post_id'],
          order: [['timestamp', 'ASC']],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });

    req.session.save(() => {
      req.session.post_id = dbBlogpost.id;
    });

    console.log("Post ID:", dbBlogpost.id);
    console.log("Session Post ID:", req.session.post_id);

    const blogpost = dbBlogpost.get({ plain: true });

    console.info(blogpost);

    res.render('post', {
      ...blogpost,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);

router.get('/dashboard', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    } else {
    console.info("USER ID:", req.session.user_id);
    const dbUser = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Blogpost,
        }
      ],
    });

    const user = dbUser.get({ plain: true });
    const blogposts = user.blogposts;

    console.info(blogposts);

    res.render('dashboard', {
      blogposts,
      user,
      loggedIn: req.session.loggedIn,
    });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/newpost', async (req, res) => {
  try {
      res.render('newpost', {
          loggedIn: req.session.loggedIn,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
