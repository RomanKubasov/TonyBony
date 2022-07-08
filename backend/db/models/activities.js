'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities extends Model {
    static associate({categories, skills}) {
      this.belongsTo(categories, {foreignKey: 'category_id'});
      this.belongsToMany(skills, {through: 'activities_skills'});
    }
  }
  activities.init({
    activity: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activities',
  });
  return activities;
};
