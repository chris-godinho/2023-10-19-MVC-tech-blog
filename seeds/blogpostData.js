const { Blogpost } = require('../models');

const blogpostdata = [
  {
    title: 'My First Post',
    contents: 'Hello everyone! This just to let you know that I am starting my own blog.',
    creator: 'smoothmoves',
    date: 'January 7, 2023 02:25:00',
  },
  {
    title: 'My Second Post',
    contents: 'Hello everyone! Bit of a change of plans: I am working on a project for the next two weeks, so I will be sitting those out for now. See you soon!',
    creator: 'smoothmoves',
    date: 'January 8, 2023 11:40:00',
  }
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;
