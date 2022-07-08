'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities extends Model {
    static associate({categories, strengths}) {
      this.belongsTo(categories, {foreignKey: 'category_id'});
      this.belongsToMany(strengths, {through: 'activities_strengths'});
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
