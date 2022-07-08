'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activities_strengths', [
      { strength_id: 2, activity_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 7, activity_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 18, activity_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 23, activity_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 2, activity_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 7, activity_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 10, activity_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 21, activity_id: 32, createdAt: new Date(), updatedAt: new Date() },
      { strength_id: 26, activity_id: 32, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
