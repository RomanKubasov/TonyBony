'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activities', [
      { activity: `football`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `basketball`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `tennis`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `running`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `martial arts`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `gymnastics`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `hockey`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `skiing`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `figure skating`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `swimming`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `horse riding`, category_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { activity: `drawing`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `modelling`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `photo`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `writing`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `wood work`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `video`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `theater`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `needlework`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `cooking`, category_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { activity: `vocal`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `piano`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `guitar`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `jazz band`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `orchestra`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `drums`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `chorus`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `r&b`, category_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { activity: `modern dances`, category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { activity: `ballet`, category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { activity: `national dances`, category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { activity: `ballroom dances `, category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { activity: `latina`, category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { activity: `tango`, category_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { activity: `maths`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `coding`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `foreign languages`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `physics`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `engineering`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `chemistry`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `biology`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `literature`, category_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { activity: `travelling`, category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { activity: `fishing`, category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { activity: `plants growing`, category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { activity: `pet breeding`, category_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { activity: `astronomy`, category_id: 6, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
