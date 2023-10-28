const bcrypt = require('bcrypt');
const { User } = require('../models');

const seedUser = async () => {
  for (const user of userdata) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  await User.bulkCreate(userdata);
};

const userdata = [
  {
    username: 'smoothmoves',
    email: 'stuart.e.maclean@hotmail.com',
    password: 'testing123',
  },
  {
    username: 'sheist',
    email: 'gregorymaclean@terra.com.br',
    password: 'icheatatgames',
  },
  {
    username: 'buzzingbee',
    email: 'buzzingbee@example.com',
    password: 'Buzzing123!',
  },
  {
    username: 'wanderlust21',
    email: 'wanderlust21@example.com',
    password: 'Wander2023!',
  },
  {
    username: 'foodiechic',
    email: 'foodiechic@example.com',
    password: 'YummyDishes456!',
  },
  {
    username: 'gadgetguru',
    email: 'gadgetguru@example.com',
    password: 'TechMaster789!',
  },
  {
    username: 'bookworm19',
    email: 'bookworm19@example.com',
    password: 'BookWorm567!',
  },
  {
    username: 'fitfreak',
    email: 'fitfreak@example.com',
    password: 'Fitness2023!',
  },
  {
    username: 'handymaniac',
    email: 'handymaniac@example.com',
    password: 'DIYKing123!',
  },
  {
    username: 'cinephile123',
    email: 'cinephile123@example.com',
    password: 'MovieBuff456!',
  },
  {
    username: 'greenthumb22',
    email: 'greenthumb22@example.com',
    password: 'Gardening2023!',
  },
  {
    username: 'musiclover99',
    email: 'musiclover99@example.com',
    password: 'MusicFan567!',
  },
  {
    username: 'artisticmind',
    email: 'artisticmind@example.com',
    password: 'Artistic123!',
  },
  {
    username: 'globetrotter87',
    email: 'globetrotter87@example.com',
    password: 'Traveler456!',
  },
  {
    username: 'codegeek123',
    email: 'codegeek123@example.com',
    password: 'CodeMaster2023!',
  },
  {
    username: 'fashionista22',
    email: 'fashionista22@example.com',
    password: 'Fashionista567!',
  },
  {
    username: 'petlover4ever',
    email: 'petlover4ever@example.com',
    password: 'AnimalLover123!',
  },
];

module.exports = seedUser;