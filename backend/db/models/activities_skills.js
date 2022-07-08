'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities_skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activities_skills.init({
    skill_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activities_skills',
  });
  return activities_skills;
};