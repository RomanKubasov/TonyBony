'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    static associate({types, activities}) {
      this.belongsTo(types, {foreignKey: 'type_id'});
      this.belongsToMany(activities, {through: 'activities_skills'});
    }
  }
  skills.init({
    skill: DataTypes.STRING,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'skills',
  });
  return skills;
};
