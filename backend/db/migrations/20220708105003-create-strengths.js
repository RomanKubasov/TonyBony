'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('strengths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strength: {
        type: Sequelize.STRING
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'types',
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
    await queryInterface.dropTable('strengths');
  }
};
