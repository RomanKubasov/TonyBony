'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities_strengths extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activities_strengths.init({
    skill_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activities_strengths',
  });
  return activities_strengths;
};
