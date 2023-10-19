const sequelize = require('../config/connection');
const seedBlogpost = require('./blogpostData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogpost();

  await seedUser();

  process.exit(0);
};

seedAll();
