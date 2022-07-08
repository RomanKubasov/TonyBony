'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { category: `sport`, createdAt: new Date(), updatedAt: new Date() },
      { category: `art`, createdAt: new Date(), updatedAt: new Date() },
      { category: `music`, createdAt: new Date(), updatedAt: new Date() },
      { category: `dance`, createdAt: new Date(), updatedAt: new Date() },
      { category: `science`, createdAt: new Date(), updatedAt: new Date() },
      { category: `nature`, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
