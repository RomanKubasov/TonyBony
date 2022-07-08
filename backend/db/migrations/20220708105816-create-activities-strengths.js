'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('activities_strengths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strength_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'strengths',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      activity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'activities',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('activities_strengths');
  }
};
