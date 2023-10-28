const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.info(req.body.username, req.body.password);
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    console.info(dbUserData);

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'User does not exist!' })
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    console.info("validPassword:", validPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' })
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' })
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;