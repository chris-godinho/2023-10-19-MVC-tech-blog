const { Comment } = require('../models');

const commentdata = [
  {
    text: 'Good luck with your new blog!',
    user_id: 2,
    post_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
