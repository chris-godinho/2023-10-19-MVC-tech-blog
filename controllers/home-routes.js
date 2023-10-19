const router = require('express').Router();
const { Blogpost, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBlogpost = await Blogpost.findAll();
    const blogposts = dbBlogpost.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('home', {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
