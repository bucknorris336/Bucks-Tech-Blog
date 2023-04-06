const sequelize = require("../config/config");
const { User, Post, Comment } = require("../models");

const userData = require("./user-seeds.js");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
