'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', [
      { type: `social and emotional intelligence`, createdAt: new Date(), updatedAt: new Date() },
      { type: `skills`, createdAt: new Date(), updatedAt: new Date() },
      { type: `qualities`, createdAt: new Date(), updatedAt: new Date() },
      { type: `literacies`, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
