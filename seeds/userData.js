const { User } = require('../models');

const userdata = [
  {
    username: 'smoothmoves',
    email: 'stuart.e.maclean@hotmail.com',
    password: 'StuChris2023!',
  },
  {
    username: 'sheist',
    email: 'gregorymaclean@terra.com.br',
    password: 'icheatatgames',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;