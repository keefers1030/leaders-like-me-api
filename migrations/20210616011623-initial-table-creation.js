'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('leaders', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      image: {type: },
      category: {type: Sequelize.ENUM }, // how to put ENUM data in?
      community: {type: Sequelize.ENUM },
      community2: {type: Sequelize.ENUM },
      link: {type: Sequelize.STRING },
      slug:{ type: Sequelize.STRING, unique: TRUE },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  // image LOAD_FILE,
  // category ENUM (
  //   'Female',
  //   'BIPOC',
  //   'AAPI',
  //   'LGBTQIA',
  //   'Disabled',
  //   'Neurodivergent',
  // ),
  // steam ENUM (
  //   'Science',
  //   'Technology',
  //   'Engineering',
  //   'Arts',
  //   'Math',
  //   'Social Justice'
  // ),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('leaders')

  }
};
